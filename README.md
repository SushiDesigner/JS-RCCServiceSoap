# JS-RCCServiceSoap
 A JS Framework for RCC and JS Interaction
Requires node-fetch
Requires xml-js

###### Examples

```js
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    url = 'http://127.0.0.1:64989';
    const convert = require('xml-js');
    const test = require('./rcctalk')
    
    var openjobresult = await test.OpenJob("Test2","print('test')","200") // JobId, script, and expiration time. Expiration time is optional
    console.dir(openjobresult,{ depth: null })

    var result = await test.GetAllJobs()
    console.dir(result,{ depth: null })
    
    var executeresult = await test.Execute("Test","print('lol')")
    console.dir(executeresult,{ depth: null })

    var closejobresult = await test.CloseJob("Test")
    console.dir(closejobresult,{ depth: null })

    var renewjobresult = await test.RenewLease("Test2","200")
    console.dir(renewjobresult,{ depth: null })

    var getexpirationresult = await test.GetExpiration("Test")
    console.dir(getexpirationresult,{ depth: null })

    var closeexpiredjobsresult = await test.CloseExpiredJobs()
    console.dir(closeexpiredjobs,{ depth: null })

    var closealljobsresult = await test.CloseAllJobs()
    console.dir(closealljobsresult,{ depth: null })
```
