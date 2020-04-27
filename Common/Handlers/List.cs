using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using API.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class List
    {
        public class Query : IRequest<List<Book>> {}

        public class Handler : IRequestHandler<Query, List<Book>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Book>> Handle(Query request, CancellationToken cancellationToken)
            {
                var books = await _context.Books.ToListAsync();
                return books;
            }
        }
    }
}