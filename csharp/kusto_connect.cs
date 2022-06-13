// install Nuget - Microsoft.Azure.Kusto.Data  (10.0.1 as of 4/1/2022)

using Kusto.Data;
using Kusto.Data.Common;
using Kusto.Data.Net.Client;


//以下のような感じの記述で動作
static void Main()
{
    const string Cluster = "https://XXXXXX.kusto.windows.net";
    const string Database = "YYYYYY";
    
    var kcsb = new KustoConnectionStringBuilder(Cluster, Database).WithAadUserPromptAuthentication();
    using (var queryProvider = KustoClientFactory.CreateCslQueryProvider(kcsb))
    {
        var query = "ここにKusto queryを記述";

        var clientRequestProperties = new ClientRequestProperties() { ClientRequestId = Guid.NewGuid().ToString() };
        using (var reader = queryProvider.ExecuteQuery(query, clientRequestProperties))
        {
            while (reader.Read())
            {
                int cnt = reader.FieldCount;	// how many fields
                for (int i = 0; i < cnt; i++)
                {
                    Console.Write(reader[i] + "\t");
                }
                Console.WriteLine();
            }
        }
    }
}
