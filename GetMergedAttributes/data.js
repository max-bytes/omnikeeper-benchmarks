window.BENCHMARK_DATA = {
  "lastUpdate": 1662484845430,
  "repoUrl": "https://github.com/max-bytes/omnikeeper",
  "entries": {
    "GetMergedAttributes Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Maximilian Csuk",
            "username": "maximiliancsuk",
            "email": "maximilian.csuk@gmx.at"
          },
          "committer": {
            "name": "Maximilian Csuk",
            "username": "maximiliancsuk",
            "email": "maximilian.csuk@gmx.at"
          },
          "id": "5dcb22a518e87d0ea8855c54ec668b26acb10cdd",
          "message": "bugfix",
          "timestamp": "2022-09-06T17:12:42Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/5dcb22a518e87d0ea8855c54ec668b26acb10cdd"
        },
        "date": 1662484844496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Integer\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 152561268.52,
            "unit": "ns",
            "range": "± 11527759.259949747"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"IntegerArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 248567701.22,
            "unit": "ns",
            "range": "± 13255172.411519568"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSON\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 514913340.32,
            "unit": "ns",
            "range": "± 39355736.67740445"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSONArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 573446093.3,
            "unit": "ns",
            "range": "± 33094681.221507907"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 150141097.58,
            "unit": "ns",
            "range": "± 9256845.035412485"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"TextArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 239641231.08,
            "unit": "ns",
            "range": "± 14602089.141483627"
          }
        ]
      }
    ]
  }
}