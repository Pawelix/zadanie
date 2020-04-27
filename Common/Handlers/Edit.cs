using System;
using System.Threading;
using System.Threading.Tasks;
using API.Domain;
using MediatR;

namespace API
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Author { get; set; }
            public string BookType { get; set; }
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
                var book = await _context.Books.FindAsync(request.Id);

                if (book == null)
                    throw new Exception("Could not find that book");

                book.Title = request.Title ?? book.Title;
                book.Author = request.Author ?? book.Author;
                book.BookType = request.BookType ?? book.BookType;
                book.Publisher = request.Publisher ?? book.Publisher;

                var succes = await _context.SaveChangesAsync() > 0;

                if (succes) return Unit.Value;

                throw new Exception("Can not edit entity to db");
            }
        }
    }
}