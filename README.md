# API

### ```/arithmetic/sum```
*calculate sum of two numbers*
**Method:**```GET```
**Query parameters:**
```javascript
{
    a:{type: number, required: true}, 
    b:{type: number, required: true}
}
```
**Responses:**
```200```
```{data:<number>}```

```400```
```{message:'Request parameters not found'}```
*When one or more request parameters are not found* 

```400```
```{message:'Request params must be numbers'}```
*When one or more request parameters are not a number* 

### ```/string/search-substring```
*search substring in a string and returning index of substring in a string*
**Method:**```POST```

**Query parameters:**
```javascript
{
    string:{type: string, required: true}, 
    search:{type: string, required: true}
}
```
**Responses:**
```200```
```{data:<number>}```

```400```
```{message:'Request parameters not found'}```
*When one or more request parameters not found* 

```400```
```{message:'Substring not found'}```
*When substring not found in a string* 

### ```/string/reverse```
*for reversing string*
**Method:**```POST```
**Query parameters:**
```
{
value:{type: string, required: true}
}
```
**Responses:**
```200```
```{data:<string>}```

```400```
```{message:'Request parameters not found'}```
*When request parameter not found* 