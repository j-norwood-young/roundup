# roundup
Rounds up to a specific unit like a spreadsheet ROUNDUP function

# Installation

npm i -S roundup

# Usage

```
const roundup = require("roundup");

roundup(12345, -1); // 12350
roundup(12345, -2); // 12400
roundup(12345.123, 1); // 12350.2
roundup(12345.123, 2); // 12350.13
```

# License

MIT License