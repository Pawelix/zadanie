using System;
using System.Threading;
using System.Threading.Tasks;
using API.Domain;
using MediatR;

namespace API
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Title { get; set; }
            public string Author { get; set; }
            public string Description { get; set; }
            public string Publisher { get; set; }
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
                var book = new Book
                {
                    Title = request.Title,
                    Author = request.Author,
                    Description = request.Description,
                    Publisher = request.Publisher
                };

                _context.Books.Add(book);
                var success = await _context.SaveChangesAsync() > 0;
                
                if (success) return Unit.Value;

                throw new Exception("Can not add entity to db");                
            }
        }
    }
}