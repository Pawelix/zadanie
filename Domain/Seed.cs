using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Domain
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Books.Any())
            {
                var books = new List<Book>
                {
                    new Book
                    {
                        Id = 1,
                        Title = "somename",
                        Author = "zbiorowy",
                        BookType = "naukowa",
                        Publisher = "nowa era"
                    },
                    new Book
                    {
                        Id = 2,
                        Title = "somename2",
                        Author = "zbiorowy",
                        BookType = "naukowa",
                        Publisher = "nowa era"
                    }
                };
                context.Books.AddRange(books);
                context.SaveChanges();
            }
        }
    }
}