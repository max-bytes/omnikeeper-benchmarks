window.BENCHMARK_DATA = {
  "lastUpdate": 1662478339839,
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
          "id": "1a2b69dc1ccd52b12d8575297e0790d4494e227f",
          "message": "bugfix",
          "timestamp": "2022-09-06T15:24:48Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/1a2b69dc1ccd52b12d8575297e0790d4494e227f"
        },
        "date": 1662477981715,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 128798727.9,
            "unit": "ns",
            "range": "± 7209462.34162403"
          }
        ]
      },
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
          "id": "93297efd2339aa7ddc9e9635c46cf28aee89a099",
          "message": "reenable proper perf test",
          "timestamp": "2022-09-06T15:29:03Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/93297efd2339aa7ddc9e9635c46cf28aee89a099"
        },
        "date": 1662478339596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Integer\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 138182952.26,
            "unit": "ns",
            "range": "± 10011312.090091767"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"IntegerArray\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 198609517.5,
            "unit": "ns",
            "range": "± 13468798.743082467"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSON\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 354216138.54,
            "unit": "ns",
            "range": "± 25265151.89661171"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSONArray\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 366868608.8,
            "unit": "ns",
            "range": "± 21989373.672447287"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 131785811.48,
            "unit": "ns",
            "range": "± 11017209.503195144"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"TextArray\", EnablePerRequestModelCaching: False, UseLatestTable: True, PreSetupData: True, AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 191886031.66,
            "unit": "ns",
            "range": "± 11432888.660498315"
          }
        ]
      }
    ]
  }
}