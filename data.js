window.BENCHMARK_DATA = {
  "lastUpdate": 1662479446971,
  "repoUrl": "https://github.com/max-bytes/omnikeeper",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "f0080ce0bb3dcfe003fe5b6ba89720de9eb12036",
          "message": "Improvements to perf tests",
          "timestamp": "2022-09-06T15:46:15Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/f0080ce0bb3dcfe003fe5b6ba89720de9eb12036"
        },
        "date": 1662479446713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Integer\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 152891144.84,
            "unit": "ns",
            "range": "± 9308866.599180534"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"IntegerArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 248546361.2,
            "unit": "ns",
            "range": "± 11119139.575092584"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSON\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 461395948.52,
            "unit": "ns",
            "range": "± 41181897.528878026"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSONArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 483230859.54,
            "unit": "ns",
            "range": "± 31703897.134515885"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 153243901.74,
            "unit": "ns",
            "range": "± 10502115.32038717"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"TextArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 253105682.48,
            "unit": "ns",
            "range": "± 16378592.803495714"
          }
        ]
      }
    ]
  }
}
