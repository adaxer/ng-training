using Newtonsoft.Json;

namespace HelloServer;
public class Product
{
    [JsonProperty("productId")]
    public int ProductId { get; set; }
    [JsonProperty("productname")]
    public string ProductName { get; set; }
    [JsonProperty("productCode")]
    public string ProductCode { get; set; }
    [JsonProperty("releaseDate")]
    public string? ReleaseDate { get; set; }
    [JsonProperty("price")]
    public decimal Price { get; set; }
    [JsonProperty("description")]
    public string? Description { get; set; }
    [JsonProperty("starRating")]
    public decimal StarRating { get; set; }
    [JsonProperty("imageUrl")]
    public string? ImageUrl { get; set; }
}
