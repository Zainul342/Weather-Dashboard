# Weather Dashboard User Flows

This document maps out the core user interactions and logic flows for the application.

## 1. App Initialization & Geolocation Flow

When the user first opens the application.

```mermaid
flowchart TD
    Start([User Opens App]) --> CheckStorage{Last City Saved?}
    
    CheckStorage -- Yes --> LoadStored[Load City from Storage]
    LoadStored --> FetchStored[Fetch Weather Data]
    
    CheckStorage -- No --> CheckGeo{Permission Granted?}
    CheckGeo -- Yes --> GetCoords[Get Lat/Lon]
    GetCoords --> FetchGeo[Fetch Weather by Coords]
    
    CheckGeo -- No --> DefaultCity[Load Default City e.g., Jakarta]
    DefaultCity --> FetchDefault[Fetch Default City]
    
    FetchStored --> APIResponse{API Success?}
    FetchGeo --> APIResponse
    FetchDefault --> APIResponse
    
    APIResponse -- Yes --> DisplayData[Render Weather Dashboard]
    APIResponse -- No --> ErrorState[Show Error UI]
    DisplayData --> End([User Views Weather])
```

## 2. Search City Flow

When the user manually searches for a specific location.

```mermaid
flowchart TD
    Start([User Types City]) --> Validate{Input Valid?}
    Validate -- No --> Ignore[Do Nothing / Shake UI]
    Validate -- Yes --> Loading[Show Loading State]
    
    Loading --> FetchAPI[Call OpenWeatherMap API]
    FetchAPI --> Response{Found?}
    
    Response -- Yes --> SaveHistory[Save to LocalStorage]
    SaveHistory --> UpdateUI[Update Dashboard UI]
    UpdateUI --> End([Success])
    
    Response -- No (404) --> ShowError[Show 'City Not Found' Message]
    ShowError --> Retry([User Retries])
    
    Response -- Network Error --> ShowNetError[Show Connection Check Message]
    ShowNetError --> Retry
```

## 3. Error Handling Logic

Detailed breakdown of how different errors are handled.

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Fetching : Request Data
    Fetching --> Success : 200 OK
    Fetching --> NotFound : 404 City Not Found
    Fetching --> ServerError : 500 API Error
    Fetching --> NetworkError : No Internet
    
    Success --> [*]
    
    NotFound --> ShowUserMessage : "City not found, check spelling"
    ShowUserMessage --> Idle : Search Again
    
    ServerError --> RetryStrategy : Wait & Retry?
    RetryStrategy --> ShowGenericError : "Service unavailable, try later"
    
    NetworkError --> OfflineComponents : Show Offline UI / Cached Data
    OfflineComponents --> Idle : Connection Restored
```
