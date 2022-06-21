(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[164],{90875:function(n,e,i){"use strict";i.r(e),i.d(e,{_frontmatter:function(){return d},default:function(){return m}});var o=i(22122),a=i(19756),t=(i(15007),i(64983)),r=i(99536),c=["components"],d={},p={_frontmatter:d},l=r.Z;function m(n){var e=n.components,i=(0,a.Z)(n,c);return(0,t.mdx)(l,(0,o.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"on-device-decisioning-rule-artifact"},"On-device decisioning rule artifact"),(0,t.mdx)("p",null,"The rule artifact is a JSON representation of your Adobe Target on-device decisioning activities. The rule artifact is generated by Target and propagated to the Akamai CDN to ensure there is a rule artifact available as close as possible to your visitors. The rule artifact contains metadata that ensures precise execution and delivery of your activities, while also allowing for real-time analytics via event tracking."),(0,t.mdx)("p",null,"This is an example of a JSON rule artifact:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "1.0.0",\n    "meta": {\n        "clientCode": "targetfeatures",\n        "environment": "production"\n    },\n    "globalMbox": "target-global-mbox",\n    "geoTargetingEnabled": false,\n    "responseTokens": [],\n    "remoteMboxes": [],\n    "remoteViews": [],\n    "localMboxes": ["central-prod", "central-stage", "edge-dev", "edge-prod", "edge-prod34", "edge-prod35", "edge-stage", "profile-dev", "profile-prod"],\n    "localViews": [],\n    "rules": {\n        "mboxes": {\n            "edge-prod35": [{\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-prod35",\n                    "location.type": "mbox",\n                    "location.id": 3,\n                    "audience.ids": [],\n                    "offer.id": 234880,\n                    "offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/3/1598040310443",\n                    "option.id": 5,\n                    "option.name": "Offer5"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod35",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 1,\n                    "experience.name": "Experience B",\n                    "location.name": "edge-prod35",\n                    "location.type": "mbox",\n                    "location.id": 3,\n                    "audience.ids": [],\n                    "offer.id": 234879,\n                    "offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/3/1598040310434",\n                    "option.id": 9,\n                    "option.name": "Offer9"\n                },\n                "condition": {\n                    "and": [{\n                        "<": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod35",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "edge-prod34": [{\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-prod34",\n                    "location.type": "mbox",\n                    "location.id": 2,\n                    "audience.ids": [],\n                    "offer.id": 234881,\n                    "offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/2/1598040310459",\n                    "option.id": 4,\n                    "option.name": "Offer4"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod34",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 1,\n                    "experience.name": "Experience B",\n                    "location.name": "edge-prod34",\n                    "location.type": "mbox",\n                    "location.id": 2,\n                    "audience.ids": [],\n                    "offer.id": 234878,\n                    "offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/2/1598040310417",\n                    "option.id": 8,\n                    "option.name": "Offer8"\n                },\n                "condition": {\n                    "and": [{\n                        "<": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod34",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "profile-dev": [{\n                "ruleKey": "121413",\n                "activityId": 121413,\n                "meta": {\n                    "activity.id": 121413,\n                    "activity.name": "Profile Configuration",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "profile-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [],\n                    "offer.id": 237411,\n                    "offer.name": "/profile_configuration/experiences/0/pages/0/zones/0/1600446608982",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "profile-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "NOE+oy7q47YMejnY4KQaMWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "M2_PROCESS_PROFILE_UPDATE_VIA_PIPELINE": true,\n                            "M2_PUBLISH_PROFILE_UPDATE_VIA_KAFKA": false,\n                            "M2_PROFILE_UPDATE_SECONDARY_PIPELINE_ENABLED": false,\n                            "M2_PROFILE_UPDATE_PRIMARY_PIPELINE_LIMIT_PER_CLIENT": 5000000\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "central-prod": [{\n                "ruleKey": "121452",\n                "activityId": 121452,\n                "meta": {\n                    "activity.id": 121452,\n                    "activity.name": "Enable DULE - Temp",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "central-prod",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [],\n                    "offer.id": 237491,\n                    "offer.name": "/enable_dule_-_temp/experiences/0/pages/0/zones/1/1600710199554",\n                    "option.id": 3,\n                    "option.name": "Offer3"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "central-prod",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "vqksnbzeGmM+VJVHy46c/WqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "M2_ENABLE_DULE": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "edge-stage": [{\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-stage",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [],\n                    "offer.id": 234045,\n                    "offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/1/1597340302885",\n                    "option.id": 3,\n                    "option.name": "Offer3"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-stage",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",\n                            "m2.platform.edge.profile.zen.service.registry.address": "zenserviceregistry-stg4-va6.stage.cloud.adobe.io",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 1,\n                    "experience.name": "Experience B",\n                    "location.name": "edge-stage",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [],\n                    "offer.id": 234046,\n                    "offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/1/1597340302896",\n                    "option.id": 7,\n                    "option.name": "Offer7"\n                },\n                "condition": {\n                    "and": [{\n                        "<": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-stage",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceTarV4",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "edge-prod": [{\n                "ruleKey": "121126",\n                "activityId": 121126,\n                "meta": {\n                    "activity.id": 121126,\n                    "activity.name": "MBox Endpoint Denied Usage",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-prod",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [1770707],\n                    "offer.id": 236484,\n                    "offer.name": "/mbox_endpoint_deniedusage/experiences/0/pages/0/zones/1/1600200955667",\n                    "option.id": 3,\n                    "option.name": "Offer3"\n                },\n                "condition": {\n                    "and": [{\n                        "and": [{\n                            "<=": [0.0, {\n                                "var": "allocation"\n                            }]\n                        }, {\n                            ">=": [100.0, {\n                                "var": "allocation"\n                            }]\n                        }]\n                    }, {\n                        "in": ["demo", {\n                            "var": "mbox.tenant_lc"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "cEHkmK61Bpmw4+ty+j3gAWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "allow_mbox_endpoint": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120956",\n                "activityId": 120956,\n                "meta": {\n                    "activity.id": 120956,\n                    "activity.name": "Mbox Endpoint Allowed Usage",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-prod",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [1768591],\n                    "offer.id": 236483,\n                    "offer.name": "/mbox_endpoint_allowedusage/experiences/0/pages/0/zones/1/1600200900499",\n                    "option.id": 3,\n                    "option.name": "Offer3"\n                },\n                "condition": {\n                    "and": [{\n                        "and": [{\n                            "<=": [0.0, {\n                                "var": "allocation"\n                            }]\n                        }, {\n                            ">=": [100.0, {\n                                "var": "allocation"\n                            }]\n                        }]\n                    }, {\n                        "or": [{\n                            "in": ["allnipponairwayscolt", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["audible", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["demo", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["mitsuifudosan", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["maruig", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["nomurasecurities", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["panasonicglobal", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["senshukai", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "r63j6mIiqBHfg54CQiTpt2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "allow_mbox_endpoint": true\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120955",\n                "activityId": 120955,\n                "meta": {\n                    "activity.id": 120955,\n                    "activity.name": "Mbox EOL",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-prod",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [],\n                    "offer.id": 236482,\n                    "offer.name": "/mbox_eol/experiences/0/pages/0/zones/1/1600200807347",\n                    "option.id": 3,\n                    "option.name": "Offer3"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-prod",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "doRnjcbCfQmOI8iJISU2m2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "allow_mbox_endpoint": true\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "central-stage": [{\n                "ruleKey": "121452",\n                "activityId": 121452,\n                "meta": {\n                    "activity.id": 121452,\n                    "activity.name": "Enable DULE - Temp",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "central-stage",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [],\n                    "offer.id": 237492,\n                    "offer.name": "/enable_dule_-_temp/experiences/0/pages/0/zones/0/1600710199563",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "central-stage",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "vqksnbzeGmM+VJVHy46c/WqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "M2_ENABLE_DULE": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "profile-prod": [{\n                "ruleKey": "121413",\n                "activityId": 121413,\n                "meta": {\n                    "activity.id": 121413,\n                    "activity.name": "Profile Configuration",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "profile-prod",\n                    "location.type": "mbox",\n                    "location.id": 1,\n                    "audience.ids": [],\n                    "offer.id": 240358,\n                    "offer.name": "/profile_configuration/experiences/0/pages/0/zones/1/1603493206257",\n                    "option.id": 3,\n                    "option.name": "Offer3"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "profile-prod",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "NOE+oy7q47YMejnY4KQaMWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "M2_PROCESS_PROFILE_UPDATE_VIA_PIPELINE": true,\n                            "M2_PUBLISH_PROFILE_UPDATE_VIA_KAFKA": false,\n                            "M2_PROFILE_UPDATE_SECONDARY_PIPELINE_ENABLED": false,\n                            "M2_PROFILE_UPDATE_PRIMARY_PIPELINE_LIMIT_PER_CLIENT": 5000000\n                        }\n                    }],\n                    "metrics": []\n                }\n            }],\n            "edge-dev": [{\n                "ruleKey": "121126",\n                "activityId": 121126,\n                "meta": {\n                    "activity.id": 121126,\n                    "activity.name": "MBox Endpoint Denied Usage",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [1770707],\n                    "offer.id": 236374,\n                    "offer.name": "/mbox_endpoint_deniedusage/experiences/0/pages/0/zones/0/1600100151912",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "and": [{\n                            "<=": [0.0, {\n                                "var": "allocation"\n                            }]\n                        }, {\n                            ">=": [100.0, {\n                                "var": "allocation"\n                            }]\n                        }]\n                    }, {\n                        "in": ["demo", {\n                            "var": "mbox.tenant_lc"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "cEHkmK61Bpmw4+ty+j3gAWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "allow_mbox_endpoint": true\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120956",\n                "activityId": 120956,\n                "meta": {\n                    "activity.id": 120956,\n                    "activity.name": "Mbox Endpoint Allowed Usage",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [1768591],\n                    "offer.id": 235966,\n                    "offer.name": "/mbox_endpoint_allowedusage/experiences/0/pages/0/zones/0/1599536746599",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "and": [{\n                            "<=": [0.0, {\n                                "var": "allocation"\n                            }]\n                        }, {\n                            ">=": [100.0, {\n                                "var": "allocation"\n                            }]\n                        }]\n                    }, {\n                        "or": [{\n                            "in": ["allnipponairwayscolt", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["audible", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["demo", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["mitsuifudosan", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["maruig", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["nomurasecurities", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["panasonicglobal", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }, {\n                            "in": ["senshukai", {\n                                "var": "mbox.tenant_lc"\n                            }]\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "r63j6mIiqBHfg54CQiTpt2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "allow_mbox_endpoint": true\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [],\n                    "offer.id": 233916,\n                    "offer.name": "/unified_profile_callthrough/experiences/0/pages/0/zones/0/1597275643060",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceStgLocal",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": false\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120028",\n                "activityId": 120028,\n                "meta": {\n                    "activity.id": 120028,\n                    "activity.name": "Unified Profile Call Through",\n                    "activity.type": "ab",\n                    "experience.id": 1,\n                    "experience.name": "Experience B",\n                    "location.name": "edge-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [],\n                    "offer.id": 233917,\n                    "offer.name": "/unified_profile_callthrough/experiences/1/pages/0/zones/0/1597275643069",\n                    "option.id": 6,\n                    "option.name": "Offer6"\n                },\n                "condition": {\n                    "and": [{\n                        "<": [99.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "3tiVc6WrfwoAj6fCNdqms5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.service.name": "ProjectionEdgeServiceStgLocal",\n                            "M2_ALLOW_UNIFIED_PROFILE_CALL_THROUGH": true\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "121956",\n                "activityId": 121956,\n                "meta": {\n                    "activity.id": 121956,\n                    "activity.name": "Edge Configuration",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [],\n                    "offer.id": 238654,\n                    "offer.name": "/edge_configuration/experiences/0/pages/0/zones/0/1602122472366",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "apUFi4FnGUoRVhE3gJ9y+GqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "m2.platform.edge.profile.zen.client.threads": 11\n                        }\n                    }],\n                    "metrics": []\n                }\n            }, {\n                "ruleKey": "120955",\n                "activityId": 120955,\n                "meta": {\n                    "activity.id": 120955,\n                    "activity.name": "Mbox EOL",\n                    "activity.type": "ab",\n                    "experience.id": 0,\n                    "experience.name": "Experience A",\n                    "location.name": "edge-dev",\n                    "location.type": "mbox",\n                    "location.id": 0,\n                    "audience.ids": [],\n                    "offer.id": 235965,\n                    "offer.name": "/mbox_eol/experiences/0/pages/0/zones/0/1599536394016",\n                    "option.id": 2,\n                    "option.name": "Offer2"\n                },\n                "condition": {\n                    "and": [{\n                        "<=": [0.0, {\n                            "var": "allocation"\n                        }]\n                    }, {\n                        ">=": [100.0, {\n                            "var": "allocation"\n                        }]\n                    }]\n                },\n                "consequence": {\n                    "name": "edge-dev",\n                    "options": [{\n                        "type": "json",\n                        "eventToken": "doRnjcbCfQmOI8iJISU2m2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n                        "content": {\n                            "allow_mbox_endpoint": true\n                        }\n                    }],\n                    "metrics": []\n                }\n            }]\n        },\n        "views": {}\n    }\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-atjs-on-device-decisioning-rule-artifact-md-8c9a5e9404e73fc7eff2.js.map