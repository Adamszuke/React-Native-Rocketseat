# Expo

Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

## Run

``` 
npx expo start
```


## Expo config

```
npx create-expo-app@latest --template

    Blank
    Blank (Typescript)
>   Navigation (Typescript) //Select this one
    Blank (Bare)
```

## Notes

### Ordem das páginas

"3. First index.tsx is the initial route
With Expo Router, you do not define an initial route or first screen in code. Rather, when you open your app, Expo Router will look for the first index.tsx file matching the / URL. This could be an app/index.tsx file, but it doesn't have to be. If the user should start by default in a deeper part of your navigation tree, you can use a route group (a directory where the name is surrounded in parenthesis), and that will not count as part of the URL. If you want your first screen to be a group of tabs, you might put all of the tab pages inside the app/(tabs) directory and define the default tab as index.tsx. With this arrangement, the / URL will take the user directly to app/(tabs)/index.tsx file."

# Links

[Expo Documentation](https://docs.expo.dev/)