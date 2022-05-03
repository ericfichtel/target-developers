# When to use on-device versus edge decisioning

## Use Case Driven

![alt image](assets/comparison.jpeg)

The main difference between *on-device* decisioning and edge decisioning is that on-device decisioning executes decisions locally on your servers, while edge decisions are made on Adobe Target's Edge network. On-device decisioning should be used for any A/B or XT activities that need to be delivered on highly trafficked pages, where performance greatly impacts your business KPIs such as conversion, revenue, and retention. For example, suppose your marketing team is running ad campaigns to attract prospects to your home page. Running ad campaigns on publisher networks requires payment, therefore any prospect that lands on your home page translates to a dollar amount. At the same time, suppose you are running A/B experiments to see which hero image best captures your consumer's attention. If delivering those A/B experiments takes an additional 2 seconds, there is a high likelihood the consumer will become impatient and bounce. There go your marketing dollars and A/B experiments! Losing this hard-earned prospect is difficult, since any opportunity of converting this prospect to a loyal or repeat customer is now forfeited. Therefore, running an on-device decisioning activity for this use case can avoid any negative impact that latency can introduce.

On the other hand, edge decisioning requires a network blocking call to retrieve an experience, but can be highly beneficial, since real-time data and ML can be used to make the end user experience highly engaging. A network blocking call will introduce additional latency when delivering the experience; however, in some scenarios, this trade-off may make sense. For example, consider a scenario in which a customer is browsing through your product catalog, and suppose they navigate to a product details page. If that page shows a recommended list of products, along with the product the customer is currently viewing, this can boost engagement—and later, conversion and revenue. While showing the recommended list of products in this way would require an edge decision influenced by Adobe Target's ML algorithm—meaning there would be added latency—that added latency would not be significant enough for the end user to bounce. Furthermore, a recommended list of products translates to a higher conversion rate. Therefore, in this case, an edge decision provides your business the most value.

## Supported Features

In addition to assessing your use cases and business goals, review which features on-device decisioning [supports](https://adobetarget-sdks.gitbook.io/docs/on-device-decisioning/supported-features) before deciding whether to use on-device decisioning versus edge decisioning. Currently, edge decisioning supports all activity types, audience targeting, and allocation methods.