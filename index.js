addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);

  switch (url.pathname) {
    case '/new_arrivals':
      return getProducts(request);
    case '/recommendations/user':
      return getProducts(request);
    case '/recommendations/product':
      return getProducts(request);
    case '/recommendations/others':
      return getProducts(request);
    case '/reviews':
      return getReviews(request);
  }

  return new Response('Invalid action', {status: 400});
}

async function getProducts(request) {
  await sleep();

  return respond(flatten(shuffle(PRODUCTS_STUB).slice(0, 3)));
}

async function getReviews(request) {
  await sleep();

  return respond(shuffle(REVIEWS_STUB).slice(0, 3));
}

const sleep = async (ms = Math.random() * 1000) => new Promise(resolve => setTimeout(resolve, ms));
const flatten = items => items.map(item => item.node);
const shuffle = items => items.sort(() => Math.random() - 0.5);
const respond = (data) => new Response(JSON.stringify(data), {headers: {'content-type': 'application/json'}});

const PRODUCTS_STUB = [
  {
    "node": {
      "vendor": "Snowdevil",
      "compareAtPriceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "649.95"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "649.95"
        }
      },
      "descriptionHtml": "<h3><span style=\"color: #000000;\" data-mce-fragment=\"1\" data-mce-style=\"color: #000000;\"></span></h3>\n<h3><span style=\"color: #000000;\" data-mce-fragment=\"1\" data-mce-style=\"color: #000000;\">Description</span></h3>\n<p><span style=\"color: #000000;\" data-mce-fragment=\"1\" data-mce-style=\"color: #000000;\">Our flagship board, ideal for technical terrain and those who dare to go where the chairlift can't take you.</span></p>\n<p><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">The Hydrogen excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Hydrogen Snowboard has Oxygen Pack inserts giving you more float on the deepest days.</span></p>\n<hr>\n<h3>\n<strong><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\"> </span></strong>Care Guide</h3>\n<ol>\n<li><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Clean well after use</span></li>\n<li><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Wax regularly<br></span></li>\n</ol>\n<hr>\n<h3></h3>\n<h3>Specs<br>\n</h3>\n<ul>\n<li><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Weight: 5 lb</span></li>\n<li><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Length: 4 ft</span></li>\n<li><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Width: 1 ft</span></li>\n<li>\n<span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Manufactured on: 8/2/2021, 3:30:00 PM</span><br>\n</li>\n<li><span style=\"color: #000000;\" data-mce-style=\"color: #000000;\">Manufactured by: Shopify</span></li>\n</ul>\n<p> </p>",
      "handle": "snowboard",
      "id": "gid://shopify/Product/6730850828344",
      "media": {
        "edges": [
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22069310193720",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1635529594",
                "altText": "The Hydrogen snowboard, color Morning",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "MODEL_3D",
              "id": "gid://shopify/Model3d/22059971346488",
              "alt": "The Hydrogen snowboard, Interactive 3D rendering",
              "previewImage": {
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/thumb_fef655bb-26f4-485d-8262-38fa7334936f.png?v=1623985006"
              },
              "sources": [
                {
                  "url": "https://model3d.shopifycdn.com/models/o/eea3c66a77368d9a/snowboard.glb"
                },
                {
                  "url": "https://model3d.shopifycdn.com/models/o/1b55d75010199673/snowboard.usdz"
                }
              ]
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22069310160952",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-evening.jpg?v=1635529595",
                "altText": "The Hydrogen snowboard, color Evening",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22069310226488",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-night.jpg?v=1635529594",
                "altText": "The Hydrogen snowboard, color Night",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070291857464",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-lifestyle.jpg?v=1636146484",
                "altText": "The Hydrogen snowboard, front zoom",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070291824696",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-back.jpg?v=1636146472",
                "altText": "The Hydrogen snowboard, back zoom",
                "width": 1200,
                "height": 1504
              }
            }
          }
        ]
      },
      "metafields": {
        "edges": []
      },
      "priceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "600.0"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "600.0"
        }
      },
      "title": "The Hydrogen",
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289630776",
              "title": "Morning / 154",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428243512",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509",
                "altText": "The Hydrogen snowboard, color Morning",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Morning"
                },
                {
                  "name": "Size",
                  "value": "154"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289729080",
              "title": "Morning / 158",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063428243512",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509",
                "altText": "The Hydrogen snowboard, color Morning",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Morning"
                },
                {
                  "name": "Size",
                  "value": "158"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289827384",
              "title": "Morning / 160",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063428243512",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509",
                "altText": "The Hydrogen snowboard, color Morning",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Morning"
                },
                {
                  "name": "Size",
                  "value": "160"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289663544",
              "title": "Evening / 154",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428309048",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-evening.jpg?v=1636146558",
                "altText": "The Hydrogen snowboard, color Evening",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Evening"
                },
                {
                  "name": "Size",
                  "value": "154"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289761848",
              "title": "Evening / 158",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063428309048",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-evening.jpg?v=1636146558",
                "altText": "The Hydrogen snowboard, color Evening",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Evening"
                },
                {
                  "name": "Size",
                  "value": "158"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289860152",
              "title": "Evening / 160",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428309048",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-evening.jpg?v=1636146558",
                "altText": "The Hydrogen snowboard, color Evening",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Evening"
                },
                {
                  "name": "Size",
                  "value": "160"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289696312",
              "title": "Night / 154",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428276280",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-night.jpg?v=1636146572",
                "altText": "The Hydrogen snowboard, color Night",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Night"
                },
                {
                  "name": "Size",
                  "value": "154"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289794616",
              "title": "Night / 158",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428276280",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-night.jpg?v=1636146572",
                "altText": "The Hydrogen snowboard, color Night",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Night"
                },
                {
                  "name": "Size",
                  "value": "158"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007289892920",
              "title": "Night / 160",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428276280",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-night.jpg?v=1636146572",
                "altText": "The Hydrogen snowboard, color Night",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "600.0"
              },
              "compareAtPriceV2": {
                "currencyCode": "USD",
                "amount": "649.95"
              },
              "selectedOptions": [
                {
                  "name": "Color",
                  "value": "Night"
                },
                {
                  "name": "Size",
                  "value": "160"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          }
        ]
      },
      "sellingPlanGroups": {
        "edges": []
      }
    }
  },
  {
    "node": {
      "vendor": "Snowdevil",
      "compareAtPriceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "0.0"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "0.0"
        }
      },
      "descriptionHtml": "<meta charset=\"utf-8\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Description</span></h3>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">The Toggle snowboard, ideal for technical terrain and those who dare to go where the chairlift can't take you.</span></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">The <meta charset=\"utf-8\">Toggle excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the <meta charset=\"utf-8\">Toggle has Oxygen Pack inserts giving you more float on the deepest days.</span></p>\n<hr data-mce-fragment=\"1\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"> Care Guide</span></h3>\n<ol data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Clean well after use</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Wax regularly</span></li>\n</ol>\n<hr data-mce-fragment=\"1\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"> Specs</span></h3>\n<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Weight: 5 lb</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Length: 4 ft</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Width: 1 ft</span></li>\n<li data-mce-fragment=\"1\">\n<span data-mce-fragment=\"1\">Manufactured on: 8/2/2021, 3:30:00 PM</span><br data-mce-fragment=\"1\">\n</li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Manufactured by: Shopify</span></li>\n</ul>",
      "handle": "mail-it-in-freestyle-snowboard",
      "id": "gid://shopify/Product/6730949034040",
      "media": {
        "edges": [
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22069308817464",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/toggle-sea-green-desert.jpg?v=1635528565",
                "altText": "The Toggle snowboard, color Sea Green Desert",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070294839352",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/toggle-sea-green-desert-front.jpg?v=1636148311",
                "altText": "The Toggle snowboard, front zoom",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070294675512",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/toggle-sea-green-desert-back.jpg?v=1636148300",
                "altText": "The Toggle snowboard, back zoom",
                "width": 1200,
                "height": 1504
              }
            }
          }
        ]
      },
      "metafields": {
        "edges": []
      },
      "priceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "885.95"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "885.95"
        }
      },
      "title": "The Toggle",
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007290613816",
              "title": "154cm / Sea Green / Desert",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063427129400",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/toggle-sea-green-desert.jpg?v=1636148263",
                "altText": "The Toggle snowboard, color Sea Green Desert",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "885.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "154cm"
                },
                {
                  "name": "Color",
                  "value": "Sea Green / Desert"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007290646584",
              "title": "158cm / Sea Green / Desert",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063427129400",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/toggle-sea-green-desert.jpg?v=1636148263",
                "altText": "The Toggle snowboard, color Sea Green Desert",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "885.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "158cm"
                },
                {
                  "name": "Color",
                  "value": "Sea Green / Desert"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007290679352",
              "title": "160cm / Sea Green / Desert",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063427129400",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/toggle-sea-green-desert.jpg?v=1636148263",
                "altText": "The Toggle snowboard, color Sea Green Desert",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "885.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "160cm"
                },
                {
                  "name": "Color",
                  "value": "Sea Green / Desert"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          }
        ]
      },
      "sellingPlanGroups": {
        "edges": []
      }
    }
  },
  {
    "node": {
      "vendor": "Snowdevil",
      "compareAtPriceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "0.0"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "0.0"
        }
      },
      "descriptionHtml": "<meta charset=\"utf-8\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Description</span></h3>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">The Full Stack snowboard, ideal for technical terrain and those who dare to go where the chairlift can't take you.</span></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">The Full Stack excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Full Stack has Oxygen Pack inserts giving you more float on the deepest days.</span></p>\n<hr data-mce-fragment=\"1\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"> Care Guide</span></h3>\n<ol data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Clean well after use</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Wax regularly</span></li>\n</ol>\n<hr data-mce-fragment=\"1\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"> Specs</span></h3>\n<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Weight: 5 lb</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Length: 4 ft</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Width: 1 ft</span></li>\n<li data-mce-fragment=\"1\">\n<span data-mce-fragment=\"1\">Manufactured on: 8/2/2021, 3:30:00 PM</span><br data-mce-fragment=\"1\">\n</li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Manufactured by: Shopify</span></li>\n</ul>",
      "handle": "the-full-stack",
      "id": "gid://shopify/Product/6730943823928",
      "media": {
        "edges": [
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22069308162104",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/fullstack-syntax.jpg?v=1635527986",
                "altText": "The Fullstack snowboard, color Syntax",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070288842808",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/fullstack-syntax-front.jpg?v=1636145029",
                "altText": "The Fullstack snowboard, front zoom",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070288810040",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/fullstack-syntax-back.jpg?v=1636145008",
                "altText": "The Fullstack snowboard, back zoom",
                "width": 1200,
                "height": 1504
              }
            }
          }
        ]
      },
      "metafields": {
        "edges": []
      },
      "priceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "749.95"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "749.95"
        }
      },
      "title": "The Full Stack",
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007290482744",
              "title": "154cm / Syntax",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063426572344",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/fullstack-syntax.jpg?v=1636145675",
                "altText": "The Fullstack snowboard, color Syntax",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "749.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "154cm"
                },
                {
                  "name": "Color",
                  "value": "Syntax"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007290515512",
              "title": "158cm / Syntax",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063426572344",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/fullstack-syntax.jpg?v=1636145675",
                "altText": "The Fullstack snowboard, color Syntax",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "749.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "158cm"
                },
                {
                  "name": "Color",
                  "value": "Syntax"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007290548280",
              "title": "160cm / Syntax",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063426572344",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/fullstack-syntax.jpg?v=1636145675",
                "altText": "The Fullstack snowboard, color Syntax",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "749.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "160cm"
                },
                {
                  "name": "Color",
                  "value": "Syntax"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          }
        ]
      },
      "sellingPlanGroups": {
        "edges": []
      }
    }
  },
  {
    "node": {
      "vendor": "Snowdevil",
      "compareAtPriceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "0.0"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "0.0"
        }
      },
      "descriptionHtml": "<meta charset=\"utf-8\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Description</span></h3>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">The Liquid snowboard, ideal for technical terrain and those who dare to go where the chairlift can't take you.</span></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">The Liquid excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Liquid has Oxygen Pack inserts giving you more float on the deepest days.</span></p>\n<hr data-mce-fragment=\"1\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"> Care Guide</span></h3>\n<ol data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Clean well after use</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Wax regularly</span></li>\n</ol>\n<hr data-mce-fragment=\"1\">\n<h3 data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"> Specs</span></h3>\n<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Weight: 5 lb</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Length: 4 ft</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Width: 1 ft</span></li>\n<li data-mce-fragment=\"1\">\n<span data-mce-fragment=\"1\">Manufactured on: 8/2/2021, 3:30:00 PM</span><br data-mce-fragment=\"1\">\n</li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Manufactured by: Shopify</span></li>\n</ul>",
      "handle": "the-liquid",
      "id": "gid://shopify/Product/7005119283256",
      "media": {
        "edges": [
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22069309964344",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/liquid-river-blue-birch.jpg?v=1635529490",
                "altText": "The Liquid snowboard, color Blue Birch",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070292152376",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/liquid-river-blue-birch-front.jpg?v=1636146675",
                "altText": "The Liquid snowboard, front zoom",
                "width": 1200,
                "height": 1504
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "image": {
                "id": "gid://shopify/GraphApi::Image::Value/22070292447288",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/liquid-river-blue-birch-back.jpg?v=1636146702",
                "altText": "The Liquid snowboard, back zoom",
                "width": 1200,
                "height": 1504
              }
            }
          }
        ]
      },
      "metafields": {
        "edges": []
      },
      "priceRange": {
        "maxVariantPrice": {
          "currencyCode": "USD",
          "amount": "749.95"
        },
        "minVariantPrice": {
          "currencyCode": "USD",
          "amount": "749.95"
        }
      },
      "title": "The Liquid",
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007342321720",
              "title": "154cm / Syntax",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063428210744",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/liquid-river-blue-birch.jpg?v=1636146705",
                "altText": "The Liquid snowboard, color Blue Birch",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "749.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "154cm"
                },
                {
                  "name": "Color",
                  "value": "Syntax"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007342354488",
              "title": "158cm / Syntax",
              "availableForSale": true,
              "image": {
                "id": "gid://shopify/ProductImage/29063428210744",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/liquid-river-blue-birch.jpg?v=1636146705",
                "altText": "The Liquid snowboard, color Blue Birch",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "749.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "158cm"
                },
                {
                  "name": "Color",
                  "value": "Syntax"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          },
          {
            "node": {
              "id": "gid://shopify/ProductVariant/41007342387256",
              "title": "160cm / Syntax",
              "availableForSale": false,
              "image": {
                "id": "gid://shopify/ProductImage/29063428210744",
                "url": "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/liquid-river-blue-birch.jpg?v=1636146705",
                "altText": "The Liquid snowboard, color Blue Birch",
                "width": 1200,
                "height": 1504
              },
              "unitPriceMeasurement": {
                "measuredType": null,
                "quantityUnit": null,
                "quantityValue": 0,
                "referenceUnit": null,
                "referenceValue": 0
              },
              "unitPrice": null,
              "priceV2": {
                "currencyCode": "USD",
                "amount": "749.95"
              },
              "compareAtPriceV2": null,
              "selectedOptions": [
                {
                  "name": "Size",
                  "value": "160cm"
                },
                {
                  "name": "Color",
                  "value": "Syntax"
                }
              ],
              "metafields": {
                "edges": []
              },
              "sellingPlanAllocations": {
                "edges": []
              }
            }
          }
        ]
      },
      "sellingPlanGroups": {
        "edges": []
      }
    }
  }
]

const REVIEWS_STUB = [
  {
    "id": "6243278922f30089da006209",
    "review": "Tempor mollit laboris deserunt mollit nisi duis culpa minim ut qui minim cupidatat do. Ad minim excepteur cillum nulla aute commodo et culpa aute eu qui veniam eu.",
    "name": "Montoya Bender",
    "createdAt": "2011-01-07T13:18:20.916Z",
    "helpful": 21
  },
  {
    "id": "62432789f49b8ddf72804007",
    "review": "Anim veniam velit aliqua sunt aliqua excepteur in mollit. Nulla incididunt do id quis enim in et cupidatat magna.",
    "name": "Therese Hanson",
    "createdAt": "2013-10-05T09:39:38.989Z",
    "helpful": 55
  },
  {
    "id": "62432789e11ff0b7a4d3cf03",
    "review": "Ipsum veniam fugiat aliqua duis esse ut. Fugiat laborum commodo do minim mollit anim do qui.",
    "name": "Shelley Stewart",
    "createdAt": "2012-04-29T06:48:05.849Z",
    "helpful": 24
  },
  {
    "id": "6243278926446093f4c281c8",
    "review": "Occaecat excepteur amet et dolor. Veniam esse exercitation eiusmod nisi velit est sint.",
    "name": "Simon Hunter",
    "createdAt": "2010-08-18T04:22:53.089Z",
    "helpful": 37
  },
  {
    "id": "62432789b29af957fb8cd00a",
    "review": "Reprehenderit quis culpa adipisicing laboris exercitation sint reprehenderit. Deserunt reprehenderit consequat incididunt labore officia.",
    "name": "Morse Reed",
    "createdAt": "2012-12-13T16:22:44.049Z",
    "helpful": 29
  },
  {
    "id": "62432789a71c601bffb04cbc",
    "review": "Enim dolor laborum dolore velit aliqua aliqua elit minim. Magna magna sit deserunt sunt minim anim esse dolor qui culpa do aliqua.",
    "name": "Downs Rowland",
    "createdAt": "2013-07-24T09:41:57.462Z",
    "helpful": 41
  },
  {
    "id": "62432789610c38317f464530",
    "review": "Adipisicing ad est irure adipisicing duis id proident anim proident cupidatat. Veniam excepteur ullamco exercitation eiusmod exercitation esse consectetur officia dolore.",
    "name": "Wyatt Downs",
    "createdAt": "2010-01-25T18:19:04.965Z",
    "helpful": 5
  }
]
