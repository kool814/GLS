# Native List Commands

## Feature Overview

All supported languages provide some amount of built-in support to interact with the contents of a list.


## Commands

### `list add list`

`list add list : firstList secondList `

The `list add list` command adds everything in the second list to the first list.

### `list pop`

`list pop : name`

The `list pop` command removes the last element of a list.

### `list pop front`

`list pop front : listname`

The `list pop front` command removes the first element of a list.

### `list sort`

`list sort : listname`

The `list sort` command sorts a list in-place.

## Usage

```gls
list add list : aaa bbb
list pop : foo
list pop front : foo
list sort : aaa
```

### CSharp

```csharp
aaa.AddRange(bbb);
foo.RemoveAt(foo.Count - 1);
foo.RemoveAt(0);
aaa.Sort();
```

### Java

```java
aaa.addAll(bbb);
foo.remove(foo.size() - 1);
foo.remove(0);
aaa.sort();
```

### Python

```python
aaa.extend(bbb)
foo.pop()
foo.pop(0)
aaa.sort()
```

### Ruby

```ruby
aaa.concat(bbb)
foo.pop
foo.shift
aaa.sort()
```

### JavaScript

```javascript
aaa.concat(bbb);
foo.pop();
foo.shift();
aaa.sort();
```

### TypeScript

```typescript
aaa.concat(bbb);
foo.pop();
foo.shift();
aaa.sort();
```

## Implementation

### Properties

These commands will be implemented as native calls.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Add List</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to add a list to a second list.</td>
        </tr>
        <tr>
            <td>Pop</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to remove the last element of a list.</td>
        </tr>
        <tr>
            <td>Pop Front</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to remove the first element of a list.</td>
        </tr>
        <tr>
            <td>Sort</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to sort a list in-place.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Add List</th>
        <th>Pop</th>
        <th>Pop Front</th>
        <th>Sort</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"AddRange"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"RemoveAt"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["{0}.Count - 1"]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"RemoveAt"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["0"]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"Sort"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Java</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"addAll"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"remove"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["{0}.size() - 1"]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"remove"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["0"]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"sort"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Python</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"extend"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["0"]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"sort"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"concat"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"shift"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"sort"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"concat"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"shift"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"sort"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"concat"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>[secondList]</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"shift"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"sort"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
    </tbody>
</table>

