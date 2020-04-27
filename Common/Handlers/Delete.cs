using System;
using System.Threading;
using System.Threading.Tasks;
using API.Domain;
using MediatR;

namespace API
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var book = await _context.Books.FindAsync(request.Id);

                if (book == null)
                    throw new Exception("Could not find that book");

                _context.Remove(book);

                var succes = await _context.SaveChangesAsync() > 0;
                
                if (succes) return Unit.Value;

                throw new Exception("Can not add entity to db");                
            }
        }
    }
}