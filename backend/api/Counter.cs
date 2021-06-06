using Newtonsoft.Json;

namespace Company.Function {
    public class Counter
    {
            [JsonProperty(PropertyName="id")]
            //Makes sure it matches the tables in azure db
            public string Id {get; set;}

            [JsonProperty(PropertyName="count")]
            //Makes sure it matches the tables in azure db
            public int Count {get; set;}
    }

}