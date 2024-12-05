The solution is to avoid directly accessing `location` outside route components.  Instead, leverage React context or pass the location data as props from the route component to the child component. 

Here's how you can use context:

```javascript
import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const location = useLocation();
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

const UseLocationWithContext = () => {
  const location = useContext(LocationContext);
  // Use the location
};
```

Now you can use `UseLocationWithContext` anywhere in your application, and it will have access to the correct location information.