Do not publish. Draft content only.


### Web + API

As described in the [Web](#web) section, the Web asset type already includes tests of
APIs that populate the Web app.

The scoping criteria for a Web + API asset is a subset of that of a Web asset alone: 

(Split into three tables)

|                                         | Extra Small                         | Small                               | Medium                              | Large                               | Extra Large                         |
|-----------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| User Roles                              |                                     |                                     | 1 - 2                               | 1 - 4 <br>  5 - 7                   | 1 - 7 <br>  8+                      |
| User Roles: More Frontend Endpoints     |                                     | 0 - 75                              | 1                                   |                                     |                                     |
| User Roles: Fewer Frontend Endpoints    | 1                                   | 1 - 2                               | 3 - 5                               |                                     |                                     |
| Dynamic Pages                           | 0 - 29                              | 0 - 29 <br>  0 - 59                 | 0 - 29 <br>  0 - 59 <br>  0 - 89    | 0 - 29 <br>  0 - 119                | 0 - 29 <br>  0 - 149                |
| Dynamic Pages: More Frontend Endpoints  |                                     |                                     |                                     |                                     |                                     |
| Dynamic Pages: Fewer Frontend Endpoints |                                     |                                     |                                     |                                     |                                     |
| Frontend API Endpoints                  |                                     |                                     | 0 - 74                              |                                     |                                     |
| Frontend API Endpoints (more)           |                                     | 0 - 74                              | 0 - 149                             | 0 - 224                             | 0 - 299                             |
| Frontend API Endpoints (fewer)          | 0 - 9 or <br> 95% backend endpoints | 0 - 9 or <br> 95% backend endpoints | 0 - 9 or <br> 95% backend endpoints | 0 - 9 or <br> 95% backend endpoints | 0 - 9 or <br> 95% backend endpoints |

If your numbers of User Roles, Frontend endpoints, and Dynamic Pages fit into different categories,
use your judgment. If you choose a "bigger" category, you're likely to
get a more complete test. You can also consult your Technical Account Manager for advice.

### Web + External Network

### Web + Mobile
