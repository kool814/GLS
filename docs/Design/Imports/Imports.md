# Imports

Including items from other files or libraries/packages/modules is done with importing.

Supported languages generally have one or two of the following forms of inputs:

1. Importing specific items within a package
2. Importing an entire package

The first is preferred for being more explicit, and will be used in languages that support it.
The second is used as a fallback when the first is unavailable or inconvenient. 

Importing items from other files in the same code project is done automatically.
If an path is detected as being a part of the file's path as started in a `file start` command, and the output language uses relative imports, a relative path will be used.

## Commands

### `import`

`import` `:` `packageName`*`[, item, ...]`* 

Importing some items from a package is done with the `import` command.


## Usage

```
file start : MyPackage/File
import : Package.Section ItemOne ItemTwo
import : MyPackage.Directory.OtherFile ItemA ItemB
```

### CSharp

```csharp
using Package.Section;
```

```csharp
using MyPackage.Directory;
```

### Java

```java
import package.section.ItemOne;
import package.section.ItemTwo;
```

```java
import myPackage.directory.ItemA;
import myPackage.directory.ItemB;
```

### Python

```python
from "package/section" import ItemOne, ItemTwo

from "./
```

### Ruby

```ruby
require "package/section"
```

### TypeScript

```typescript
import { ItemOne, ItemTwo } from "package/section";
```


## Implementation

Each import line starts with `ImportLeft` and ends with `ImportRight`.

Languages that specify individual items will add after `ImportLeft` either put the package name, `ImportMiddle`, and items, or the reverse order.

Some languages allow one item per package import line, so multiple items from one package must be on their own line.
Others allow items to be separated by `", "`.


### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>ImportCase</td>
            <td><code>FileSystem</code> | <code>PackageUpperCase</code> | <code>PackageLowerCase</code></td>
            <td>Casing modifier for package names.</td>
        </tr>
        <tr>
            <td>ImportExplicit</td>
            <td>boolean</td>
            <td>Whether individual items should be named.</td>
        </tr>
        <tr>
            <td>ImportExplicitLines</td>
            <td>boolean</td>
            <td>Whether items should be imported on separate lines, rather than as a comma-separated list.</td>
        </tr>
        <tr>
            <td>ImportItemsBeforePackage</td>
            <td>boolean</td>
            <td>Whether items should come before package names.</td>
        </tr>
        <tr>
            <td>ImportLeft</td>
            <td>string</td>
            <td>Start of an import line.</td>
        </tr>
        <tr>
            <td>ImportMiddle</td>
            <td>string</td>
            <td>Middle of an import line, between items and package.</td>
        </tr>
        <tr>
            <td>ImportRight</td>
            <td>string</td>
            <td>End of an import line.</td>
        </tr>
        <tr>
            <td>RelativeLocalPaths</td>
            <td>boolean</td>
            <td>Whether local imports should have relative paths.</td>
        </tr>
    </tbody>
</table>

### Language values

<table>
    <thead>
        <td>Language</td>
        <td>ImportCase</td>
        <td>ImportExplicit</td>
        <td>ImportExplicitLines</td>
        <td>ImportItemsBeforePackage</td>
        <td>ImportLeft</td>
        <td>ImportMiddle</td>
        <td>ImportRight</td>
        <td>RelativeLocalPaths</td>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>PackageUpperCase</code></td>
            <td><code>false</code></td>
            <td></td>
            <td></td>
            <td><code>"using "</code></td>
            <td></td>
            <td><code>";"</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>PackageLowerCase</code></td>
            <td><code>true</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>"import "</code></td>
            <td><code>"."</code></td>
            <td><code>"*;"</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <th>JavaScript</th>
            <td><code>FileSystem</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>true</code></td>
            <td><code>"import { "</code></td>
            <td><code>" } from \""</code></td>
            <td><code>"\";"</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>FileSystem</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>false</code></td>
            <td><code>"from \""</code></td>
            <td><code>"\" import *"</code></td>
            <td><code>""</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>FileSystem</code></td>
            <td><code>false</code></td>
            <td></td>
            <td></td>
            <td><code>"require \""</code></td>
            <td></td>
            <td><code>"\""</code></td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>FileSystem</code></td>
            <td><code>true</code></td>
            <td><code>false</code></td>
            <td><code>true</code></td>
            <td><code>"import { "</code></td>
            <td><code>" } from \""</code></td>
            <td><code>"\";"</code></td>
            <td><code>true</code></td>
        </tr>
    </tbody>
</table>
