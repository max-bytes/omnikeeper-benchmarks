window.BENCHMARK_DATA = {
  "lastUpdate": 1662486012670,
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
          "id": "f0080ce0bb3dcfe003fe5b6ba89720de9eb12036",
          "message": "Improvements to perf tests",
          "timestamp": "2022-09-06T15:46:15Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/f0080ce0bb3dcfe003fe5b6ba89720de9eb12036"
        },
        "date": 1662479902777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Integer\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 154848797.5,
            "unit": "ns",
            "range": "± 10613647.802849034"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"IntegerArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 228522858.28,
            "unit": "ns",
            "range": "± 18928912.72161163"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSON\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 512912625.74,
            "unit": "ns",
            "range": "± 67522334.69306737"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSONArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 525508940.48,
            "unit": "ns",
            "range": "± 45443413.404777855"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 129816918.58,
            "unit": "ns",
            "range": "± 8802831.309409283"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"TextArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 217113231.62,
            "unit": "ns",
            "range": "± 21415847.642317746"
          }
        ]
      }
    ],
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
          "id": "c269e72f084d8d09a6ebbd3d4056a083619bb436",
          "message": "multiple benchmarks",
          "timestamp": "2022-09-06T17:00:12Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/c269e72f084d8d09a6ebbd3d4056a083619bb436"
        },
        "date": 1662484003433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Integer\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 129740991.56,
            "unit": "ns",
            "range": "± 8687006.982676443"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"IntegerArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 217576390.58,
            "unit": "ns",
            "range": "± 10273646.70740229"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSON\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 401780620.76,
            "unit": "ns",
            "range": "± 26906795.656714577"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSONArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 414754204.92,
            "unit": "ns",
            "range": "± 30114722.203609113"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 132457141.06,
            "unit": "ns",
            "range": "± 10596492.119315809"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"TextArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 214011387.08,
            "unit": "ns",
            "range": "± 10663184.855650833"
          }
        ]
      }
    ],
    "Benchmark": [
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
          "id": "2b6900ecbc7f5e696ce4c1ab5fd1fc29ba64bf0d",
          "message": "bugfix",
          "timestamp": "2022-09-06T17:34:36Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/2b6900ecbc7f5e696ce4c1ab5fd1fc29ba64bf0d"
        },
        "date": 1662486011193,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Integer\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 130189346.32,
            "unit": "ns",
            "range": "± 8007627.902733242"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"IntegerArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 195995597.4,
            "unit": "ns",
            "range": "± 9255531.97496785"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSON\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 362478845.22,
            "unit": "ns",
            "range": "± 28265327.93342716"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"JSONArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 355786755.66,
            "unit": "ns",
            "range": "± 20254306.55635366"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"Text\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 131864451.82,
            "unit": "ns",
            "range": "± 10508413.002983395"
          },
          {
            "name": "PerfTests.GetMergedAttributesTest.GetMergedAttributes(CIIDSelection: \"all\", AttributeValueType: \"TextArray\", AttributeCITuple: (1000, 10000, 4, 50))",
            "value": 189418936.46,
            "unit": "ns",
            "range": "± 12097623.29512967"
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
          "id": "2b6900ecbc7f5e696ce4c1ab5fd1fc29ba64bf0d",
          "message": "bugfix",
          "timestamp": "2022-09-06T17:34:36Z",
          "url": "https://github.com/max-bytes/omnikeeper/commit/2b6900ecbc7f5e696ce4c1ab5fd1fc29ba64bf0d"
        },
        "date": 1662486012426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.BulkReplaceAttributesTest.BulkReplaceAttributes(AttributeValueType: \"Integer\", AttributeCITuple: (500, 5000, 5000, 50))",
            "value": 791394359.1,
            "unit": "ns",
            "range": "± 27336033.8805307"
          },
          {
            "name": "PerfTests.BulkReplaceAttributesTest.BulkReplaceAttributes(AttributeValueType: \"IntegerArray\", AttributeCITuple: (500, 5000, 5000, 50))",
            "value": 825435840.3,
            "unit": "ns",
            "range": "± 15324517.037007267"
          },
          {
            "name": "PerfTests.BulkReplaceAttributesTest.BulkReplaceAttributes(AttributeValueType: \"JSON\", AttributeCITuple: (500, 5000, 5000, 50))",
            "value": 1090670976.4,
            "unit": "ns",
            "range": "± 439285660.8228593"
          },
          {
            "name": "PerfTests.BulkReplaceAttributesTest.BulkReplaceAttributes(AttributeValueType: \"JSONArray\", AttributeCITuple: (500, 5000, 5000, 50))",
            "value": 990223070.4,
            "unit": "ns",
            "range": "± 242623270.07248464"
          },
          {
            "name": "PerfTests.BulkReplaceAttributesTest.BulkReplaceAttributes(AttributeValueType: \"Text\", AttributeCITuple: (500, 5000, 5000, 50))",
            "value": 807229067.1,
            "unit": "ns",
            "range": "± 20409542.79079798"
          },
          {
            "name": "PerfTests.BulkReplaceAttributesTest.BulkReplaceAttributes(AttributeValueType: \"TextArray\", AttributeCITuple: (500, 5000, 5000, 50))",
            "value": 969558642.1,
            "unit": "ns",
            "range": "± 21969749.8050069"
          }
        ]
      }
    ]
  }
}