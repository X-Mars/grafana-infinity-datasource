module.exports = {
  "__version": "10.2.0",
  "sanity check": {
    "health check": {
      "1": {
        "message": "OK",
        "status": "OK"
      }
    }
  },
  "test the backend response": {
    "backend json query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "json",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "age",
              "type": "number",
              "typeInfo": {
                "frame": "float64",
                "nullable": true
              }
            },
            {
              "name": "name",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              30,
              17
            ],
            [
              "foo",
              "bar"
            ]
          ]
        }
      }
    },
    "backend csv query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "name,age\nfoo,30\nbar,17",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "name,age\nfoo,30\nbar,17",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "csv",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "age",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            },
            {
              "name": "name",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              "30",
              "17"
            ],
            [
              "foo",
              "bar"
            ]
          ]
        }
      }
    },
    "backend tsv query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "name  age\nfoo  30\nbar 17",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "name  age\nfoo  30\nbar 17",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "tsv",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "name  age",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              "foo  30",
              "bar 17"
            ]
          ]
        }
      }
    },
    "backend graphql query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "graphql",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "age",
              "type": "number",
              "typeInfo": {
                "frame": "float64",
                "nullable": true
              }
            },
            {
              "name": "name",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              30,
              17
            ],
            [
              "foo",
              "bar"
            ]
          ]
        }
      }
    },
    "backend xml query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?> <root>   <row>     <name>foo</name>     <age>30</age>   </row>   <row>     <name>bar</name>     <age>17</age>   </row> </root>",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?> <root>   <row>     <name>foo</name>     <age>30</age>   </row>   <row>     <name>bar</name>     <age>17</age>   </row> </root>",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "xml",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "root",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              "{\"row\":[{\"age\":\"30\",\"name\":\"foo\"},{\"age\":\"17\",\"name\":\"bar\"}]}"
            ]
          ]
        }
      }
    },
    "backend xml query with root selector and columns": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?> <root>   <row>     <name>foo</name>     <age>30</age>   </row>   <row>     <name>bar</name>     <age>17</age>   </row> </root>",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [
                  {
                    "selector": "age",
                    "text": "Age",
                    "timestampFormat": "",
                    "type": "number"
                  },
                  {
                    "selector": "name",
                    "text": "Name",
                    "timestampFormat": "",
                    "type": "string"
                  }
                ],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?> <root>   <row>     <name>foo</name>     <age>30</age>   </row>   <row>     <name>bar</name>     <age>17</age>   </row> </root>",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "root.row",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "xml",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "Age",
              "type": "number",
              "typeInfo": {
                "frame": "float64",
                "nullable": true
              }
            },
            {
              "name": "Name",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              30,
              17
            ],
            [
              "foo",
              "bar"
            ]
          ]
        }
      }
    },
    "backend html query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "<table class=\"table table-bordered table-hover table-condensed\"> <thead><tr><th title=\"Field #1\">name</th> <th title=\"Field #2\">age</th> </tr></thead> <tbody><tr> <td>foo</td> <td align=\"right\">30</td> </tr> <tr> <td>bar</td> <td align=\"right\">17</td> </tr> </tbody></table>",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "<table class=\"table table-bordered table-hover table-condensed\"> <thead><tr><th title=\"Field #1\">name</th> <th title=\"Field #2\">age</th> </tr></thead> <tbody><tr> <td>foo</td> <td align=\"right\">30</td> </tr> <tr> <td>bar</td> <td align=\"right\">17</td> </tr> </tbody></table>",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "html",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "table",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              "{\"-class\":\"table table-bordered table-hover table-condensed\",\"tbody\":{\"tr\":[{\"td\":[\"foo\",{\"#content\":\"30\",\"-align\":\"right\"}]},{\"td\":[\"bar\",{\"#content\":\"17\",\"-align\":\"right\"}]}]},\"thead\":{\"tr\":{\"th\":[{\"#content\":\"name\",\"-title\":\"Field #1\"},{\"#content\":\"age\",\"-title\":\"Field #2\"}]}}}"
            ]
          ]
        }
      }
    },
    "backend html query with root selector and columns": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "<table class=\"table table-bordered table-hover table-condensed\"> <thead><tr><th title=\"Field #1\">name</th> <th title=\"Field #2\">age</th> </tr></thead> <tbody><tr> <td>foo</td> <td align=\"right\">30</td> </tr> <tr> <td>bar</td> <td align=\"right\">17</td> </tr> </tbody></table>",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [
                  {
                    "selector": "td.0",
                    "text": "Name",
                    "timestampFormat": "",
                    "type": "string"
                  },
                  {
                    "selector": "td.1.#content",
                    "text": "Age",
                    "timestampFormat": "",
                    "type": "number"
                  }
                ],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "<table class=\"table table-bordered table-hover table-condensed\"> <thead><tr><th title=\"Field #1\">name</th> <th title=\"Field #2\">age</th> </tr></thead> <tbody><tr> <td>foo</td> <td align=\"right\">30</td> </tr> <tr> <td>bar</td> <td align=\"right\">17</td> </tr> </tbody></table>",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "backend",
                "query_mode": "",
                "refId": "A",
                "root_selector": "table.tbody.tr",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "html",
                "uql": "",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": [
            {
              "name": "Age",
              "type": "number",
              "typeInfo": {
                "frame": "float64",
                "nullable": true
              }
            },
            {
              "name": "Name",
              "type": "string",
              "typeInfo": {
                "frame": "string",
                "nullable": true
              }
            }
          ]
        },
        "data": {
          "values": [
            [
              30,
              17
            ],
            [
              "foo",
              "bar"
            ]
          ]
        }
      }
    }
  },
  "test the uql response": {
    "uql json query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "uql",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "json",
                "uql": "parse-json",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": []
        },
        "data": {
          "values": []
        }
      }
    },
    "uql csv query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "name,age\nfoo,30\nbar,17",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "name,age\nfoo,30\nbar,17",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "uql",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "csv",
                "uql": "parse-csv",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": []
        },
        "data": {
          "values": []
        }
      }
    },
    "uql tsv query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "name  age\nfoo  30\nbar 17",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "name  age\nfoo  30\nbar 17",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "uql",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "tsv",
                "uql": "parse-csv --delimiter \"\\t\"",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": []
        },
        "data": {
          "values": []
        }
      }
    },
    "uql graphql query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "[{\"name\":\"foo\",\"age\":30},{\"name\":\"bar\",\"age\":17}]",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "uql",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "graphql",
                "uql": "parse-json",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": []
        },
        "data": {
          "values": []
        }
      }
    },
    "uql xml query": {
      "1": {
        "schema": {
          "name": "A",
          "refId": "A",
          "meta": {
            "custom": {
              "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?> <root>   <row>     <name>foo</name>     <age>30</age>   </row>   <row>     <name>bar</name>     <age>17</age>   </row> </root>",
              "duration": 0,
              "error": "",
              "query": {
                "alias": "",
                "columns": [],
                "computed_columns": [],
                "csv_options": {
                  "columns": "",
                  "comment": "",
                  "delimiter": "",
                  "relax_column_count": false,
                  "skip_empty_lines": false,
                  "skip_lines_with_error": false
                },
                "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" ?> <root>   <row>     <name>foo</name>     <age>30</age>   </row>   <row>     <name>bar</name>     <age>17</age>   </row> </root>",
                "dataOverrides": null,
                "expression": "",
                "filterExpression": "",
                "filters": null,
                "format": "",
                "global_query_id": "",
                "groq": "",
                "json_options": {
                  "columnar": false,
                  "root_is_not_array": false
                },
                "parser": "uql",
                "query_mode": "",
                "refId": "A",
                "root_selector": "",
                "seriesCount": 0,
                "source": "inline",
                "sqlite_query": "",
                "summarizeBy": "",
                "summarizeExpression": "",
                "type": "xml",
                "uql": "parse-json",
                "url": "",
                "url_options": {
                  "body_content_type": "",
                  "body_form": null,
                  "body_graphql_query": "",
                  "body_type": "",
                  "data": "",
                  "headers": null,
                  "method": "",
                  "params": null
                }
              },
              "responseCodeFromServer": 0
            },
            "executedQueryString": "This feature is not available for this type of query yet"
          },
          "fields": []
        },
        "data": {
          "values": []
        }
      }
    }
  }
}
