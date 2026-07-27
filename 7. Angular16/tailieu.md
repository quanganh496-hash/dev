# Structure:

1. đầu tiên chúng ta có angular web.

- angular đầu tiên sử dụng webpack để gói mô-đun và xây dựng ứng dụng.

- Webpack là một công cụ mạnh mẽ giúp quản lý và gói tất cả các tài sản của ứng dụng, bao gồm Các tệp JavaScript, CSS và HTML.

- Nó tối ưu hóa mã và chuẩn bị cho việc triển khai.

2. Babel-webpack

- Babel là một trình biên dịch JavaScript cho phép các nhà phát triển viết mã JavaScript hiện đại và chuyển đổi nó thành các phiên bản tương thích ngược có thể chạy trong các trình duyệt cũ hơn.

- Nó thường được sử dụng cùng với các dự án Webpack và Angular để chuyển mã và đảm bảo trình duyệt chéo khả năng tương thích.

3. VS code:

- VS code là một trình chỉnh sửa mã nguồn và môi trường phát triển phổ biến. Mặc dù không liên quan trực tiếp đến cấu trúc thư mục góc cạnh, nhưng nó thường được các nhà phát triển sử dụng cho angular project.

- VS code cung cấp một loạt các tính năng và tiện ích mở rộng giúp nâng cao trải nghiệm phát triển, chẳng hạn như:

  - Công cụ tô sáng cú pháp, hoàn thành mã và gỡ lỗi.

4. Node modul:

- Thư mục node mô-đun được tạo khi bạn cài đặt các phụ thuộc bên ngoài cho dự án góc của mình. Bằng cách sử dụng trình quản lý gói node npm. Nó chứa tất cả các gói và thư viện mà dự án của bạn yêu cầu. Các gói này được chỉ định trong tệp `package.json`.

- NodeJS sử dụng thư mục node mô-đun để định vị và tải các mô-đun cần thiết trong thời gian chạy.

5. file src nguồn.


- Đó là trung tâm của một angular project và chứa mã nguồn của ứng dụng.

- Nó thường bao gồm các thư mục con ứng dụng sau:

  - Thư mục con này chứa các thành phần chính, dịch vụ và các tệp cụ thể góc cạnh khác tạo nên Ứng dụng của bạn.

- Đó là nơi bạn sẽ viết hầu hết mã của mình.

- Các thành phần đại diện cho các phần khác nhau của giao diện người dùng, trong khi các dịch vụ xử lý logic kinh doanh và Thao tác dữ liệu.


asset ( tài sản ):

- Vì vậy, thư mục con này được sử dụng để lưu trữ các tài sản tĩnh như hình ảnh, phông chữ hoặc các tệp khác được yêu cầu của mình.

- Các tài sản này có thể được tham chiếu và tải trong các thành phần(components) và mẫu(templates) của bạn.

enviroment:

- It contains environment specific configuration files such as environment dot products and environments which store variables used in different environments.
- Example production and deployment.
- You can specify different settings such as API endpoints or feature flags for each environment. There can be other custom folders that you may create based on your project's needs.

6. Index.html.
- sixth thing we have is the `index.html` file, which is the main entry point of your angular application.
- It serves as the initial HTML document that gets loaded in the browser.
- You can include the necessary meta tags, script references and angular app root component selector in this file.
- The angular application is dynamically loaded into a designated HTML element within this file.

7. `main.ts`:

- là điểm khởi đầu của ứng dụng Angular của bạn.

- Nó chịu trách nhiệm khởi động mô-đun Angular và khởi tạo ứng dụng.

- Nó thường nhập mô-đun ứng dụng sẽ là mô-đun gốc của ứng dụng của bạn.

- Nó cũng gọi hàm bootstrap của nền tảng Angular để khởi động ứng dụng.

8. `Styles.css`:

- The `styles.css` file is the global stylesheet for your application Any styles defined in this file will be applied globally to your entire application.
- You can define custom CSS rules or override default styles that would be provided by angular or third party libraries. It basically allows you to define the overall look and feel of your application.

9. the `Angular.json` file is the configuration file for your angular project.
- It contains various settings and options related to the building process, asset path, project structure,
and more.
- It's used to customize and fine tune your project's behavior.
- You can configure options in this file like build outputs, file replacements, and asset management.

10. `package.json`:
- the `package.json` file which is a crucial file in any Node.js project including angular projects.
- It's a file that lists all of the project's dependencies and their versions.
- It also includes scripts for running tasks such as building the application, running tests, or starting a development server.
- NPM, which stands for Node Package Manager, also uses this file to manage and install project dependencies.

11. TypeScript configuration.

- the TypeScript configuration files, such as `Tsconfig.json` that specify the compiler options and settings for the TypeScript compiler.
- They define how the TypeScript code is compiled into JavaScript, and allow for the customization of various compilation related features.
- You can configure target versions, module systems, and other options in these files.

12. `App.json` and `package.json`.

- I would like to clarify something here because it seems there might be some confusion. So in a typical angular project you won't have `App.json` or `RSpec` The Json files.
- These files are not a part of the default angular folder structure.
- However, it's possible that they become custom files that are specific to your project. Or maybe it's a typo in the names.

# Create new components:

1 số file làm vc cùng:

1. Component.TypeScript.(.ts) file.
- This contains the TypeScript code defining the components, behavior, properties, and methods.
- It interacts with the components, template and files to provide the desired functionality.

2. component.HTMLfile.
- This file contains the HTML markup that defines the structure and layout of the components view.
- It represents the visual elements and user interface of the component.

3. component.CSS. (.CSS file).
- This file contains the component specific styles and CSS rules that define the visual appearance of the component.
- In addition to these files, you will also have an app module file, typically named`App.module.ts`, that serves as the main entry point for your angular application.
- The app module imports and configures all the components, services, and modules required for your application to function correctly.

![alt text](/7.%20Angular16/images/image.png)

# Interpolation:

- It allows you to display and update data in the template based on values stored in the component.

- In the components HTML template, we use interpolation by wrapping the property names in double curly brackets.`{{ }}`

# Modules:

- Module trong Angular (gọi là NgModule) là các khối đóng gói logic được dùng để gom nhóm các thành phần liên quan lại với nhau. Chúng giúp tổ chức mã nguồn sạch sẽ, quản lý các phụ thuộc (dependencies) hiệu quả và hỗ trợ kỹ thuật Tải lười (Lazy-loading) để tối ưu hiệu năng ứng dụng

# Directives:

- `ngFor` (hoặc đầy đủ là *ngFor) là một Structural Directive trong Angular dùng để lặp qua một danh sách (mảng) dữ liệu và lặp lại cấu trúc của một phần tử HTML cho từng mục trong danh sách đó.

![alt text](/7.%20Angular16/images/image-1.png)

- `ngIf` (hay đầy đủ là *ngIf) kèm theo `else` là Structural Directive trong Angular dùng để kiểm tra điều kiện logic. Nếu điều kiện đúng (`true`), Angular sẽ hiển thị khối HTML hiện tại. Nếu điều kiện sai (false), Angular sẽ hiển thị một khối HTML thay thế được chỉ định qua từ khóa `else`.

![alt text](/7.%20Angular16/images/image-2.png)

- `ngSwitch` là một Attribute Directive trong Angular, hoạt động kết hợp với hai Structural Directives là `*ngSwitchCase` và `*ngSwitchDefault`. Cấu trúc này hoạt động hoàn toàn giống như câu lệnh switch-case trong các ngôn ngữ lập trình, giúp bạn hiển thị một khối HTML phù hợp nhất trong số nhiều lựa chọn dựa trên giá trị của một biểu thức.

- Cú pháp ngSwitch (Truyền thống)Để sử dụng cú pháp này, bạn cần đảm bảo đã import CommonModule (hoặc các directive cụ thể) vào component.Ví dụ thực tế: Hiển thị giao diện phân quyền dựa vào vai trò (role) của người dùng.

```<!-- Bọc thuộc tính [ngSwitch] quanh phần tử cha -->
<div [ngSwitch]="userRole">

  <!-- Hiển thị nếu userRole === 'admin' -->
  <div *ngSwitchCase="'admin'">
    <h3>Bảng điều khiển của Admin</h3>
    <button>Quản lý người dùng</button>
  </div>

  <!-- Hiển thị nếu userRole === 'editor' -->
  <div *ngSwitchCase="'editor'">
    <h3>Trình chỉnh sửa bài viết</h3>
    <button>Viết bài mới</button>
  </div>

  <!-- Hiển thị nếu userRole === 'member' -->
  <div *ngSwitchCase="'member'">
    <h3>Trang cá nhân thành viên</h3>
  </div>

  <!-- Khối mặc định hiển thị nếu không khớp với bất kỳ case nào ở trên -->
  <div *ngSwitchDefault>
    <h3>Vui lòng đăng nhập để xem nội dung</h3>
  </div>

</div>
```

![alt text](/7.%20Angular16/images/image-3.png)

![alt text](/7.%20Angular16/images/image-4.png)

# Routing:

## Basic:

- Angular Routing là cơ chế điều hướng cốt lõi giúp chuyển đổi qua lại giữa các view (giao diện) khác nhau trong ứng dụng trang đơn (Single Page Application - SPA). Nó cho phép thay đổi nội dung hiển thị trên URL mà không cần tải lại toàn bộ trang web, mang lại trải nghiệm mượt mà như ứng dụng máy tính.

🛠 Các bước thiết lập cơ bảnĐể xây dựng hệ thống định tuyến, bạn cần thực hiện theo các bước chuẩn cấu trúc của Angular Router:

1. Khai báo các RouteTạo danh sách các tuyến đường bằng cách ánh xạ mỗi URL (path) với một Component cụ thể.

```import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Tự động chuyển hướng khi trang trống
  { path: '**', component: PageNotFoundComponent }      // Wildcard route cho lỗi 404
];
```

2. Hiển thị nội dung định tuyến:

Đặt thẻ giữ chỗ `<router-outlet>` vào file HTML chính (như **app.component.html**). Thành phần của route được chọn sẽ hiển thị ngay tại vị trí thẻ này.

```
<nav>
  <!-- Sử dụng routerLink thay cho href để tránh tải lại trang -->
  <a routerLink="/home" routerLinkActive="active">Trang chủ</a>
  <a routerLink="/about" routerLinkActive="active">Giới thiệu</a>
</nav>

<!-- Nơi nội dung của các component sẽ được nạp vào khi URL thay đổi -->
<router-outlet></router-outlet>
```

## Dynamic Routing:

- Dynamic Routing (Định tuyến động) trong Angular là kỹ thuật cấu hình các tuyến đường (routes) linh hoạt dựa trên dữ liệu thay đổi. Có hai khái niệm chính mà lập trình viên thường gọi là định tuyến động:
  - **Route Parameters (Định tuyến động theo tham số)**: Truyền dữ liệu biến đổi như id hoặc slug trực tiếp trên thanh URL để hiển thị chi tiết nội dung.
  - **Runtime Dynamic Routing (Nạp cấu hình Route từ API)**: Tự động thêm hoặc chỉnh sửa danh sách cấu hình Route sau khi ứng dụng đã khởi chạy (thường dùng cho hệ thống phân quyền/Decentralization).


1. Định tuyến động bằng Tham số (Route Parameters)Đây là cách phổ biến nhất để chuyển đổi dữ liệu hiển thị dựa trên URL.

Bước 1: Khai báo tham số trong cấu hình RouteSử dụng dấu hai chấm : trước tên biến trong thuộc tính path.

```
// app.routes.ts
import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [
  { path: 'user/:id', component: UserDetailComponent } // :id là tham số động
];
```

Bước 2: Lấy dữ liệu tham số trong Component:

Dùng dịch vụ `ActivatedRoute` để đọc giá trị từ URL. Bạn có thể lấy dữ liệu một lần bằng `snapshot` hoặc lắng nghe thay đổi liên tục bằng `paramMap`.

```
// user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `<p>Đang xem thông tin cơ bản của User ID: {{ userId }}</p>`
})
export class UserDetailComponent implements OnInit {
  userId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Cách 1: Sử dụng snapshot (Nếu component không bị tái sử dụng lại ngay sau đó)
    this.userId = this.route.snapshot.paramMap.get('id');

    // Cách 2: Sử dụng Observable (Khuyên dùng khi URL thay đổi liên tục giữa các ID)
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      // Gọi API tải lại dữ liệu mới dựa trên userId tại đây
    });
  }
}
```
## Component interaction:

Trong Angular, việc tương tác và truyền dữ liệu giữa các thành phần (Component Interaction) là cốt lõi để xây dựng một ứng dụng động. Dựa trên cấu trúc phân cấp, Angular cung cấp các giải pháp chuyên biệt cho từng kịch bản cụ thể.

1. Truyền dữ liệu từ Cha xuống Con (@Input)

Đây là mô hình cơ bản nhất khi component cha muốn cấu hình hoặc truyền dữ liệu hiển thị cho component con.

- **Component con (child.component.ts)**: Khai báo thuộc tính nhận dữ liệu bằng `@Input()`.

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Tin nhắn từ cha: {{ childMessage }}</p>`
})
export class ChildComponent {
  @Input() childMessage: string = '';
}
```


- `.Component cha (parent.component.ts)`: Truyền dữ liệu qua thuộc tính (Property Binding) ở file HTML.


```
<!-- parent.component.html -->
<app-child [childMessage]="parentMessage"></app-child>

// parent.component.ts
parentMessage = 'Chào con, đây là dữ liệu từ cha!';

```

2. Gửi sự kiện từ Con lên Cha (@Output & EventEmitter)

Sử dụng `EventEmitter`: Trong component 'About', bạn sẽ sử dụng `EventEmitter` và decorator `@Output` để phát đi một sự kiện khi người dùng thực hiện một hành động, chẳng hạn như nhấn nút gửi. Điều này sẽ cho phép bạn truyền dữ liệu

Khi component con có một hành động (như click nút) và cần thông báo hoặc gửi dữ liệu ngược lại cho cha

- `.Component con (child.component.ts)`: Định nghĩa một sự kiện đầu ra bằng @Output().


```
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Gửi lên cha</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Con chào cha ạ!');
  }
}
```

- `.Component cha (parent.component.ts)`: Lắng nghe sự kiện (Event Binding) từ component con.

```
<!-- parent.component.html -->
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>Nhận từ con: {{ messageFromChild }}</p>

// parent.component.ts
messageFromChild: string = '';

receiveMessage(event: string) {
  this.messageFromChild = event;}
```

3. Cha gọi trực tiếp phương thức của Con (@ViewChild)

Nếu component cha muốn chủ động kích hoạt một hàm hoặc đọc thuộc tính bên trong component con mà không cần chờ sự kiện

- .Component cha (parent.component.ts): Dùng @ViewChild để tham chiếu đến component con.


```
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="triggerChildAction()">Kích hoạt con</button>
    <app-child></app-child>
  `
})
export class ParentComponent {
  // Tham chiếu trực tiếp đến selector ChildComponent
  @ViewChild(ChildComponent) child!: ChildComponent;

  triggerChildAction() {
    this.child.childMethod(); // Gọi trực tiếp hàm của con
  }
}
```

4. Tương tác giữa các Component bất kỳ (Shared Service)

Khi hai hoặc nhiều component nằm ở các nhánh khác nhau (không có quan hệ cha-con trực tiếp) cần đồng bộ dữ liệu liên tục, giải pháp tối ưu là sử dụng một Service trung gian kết hợp với RxJS **BehaviorSubject** hoặc **Signals** (từ Angular 16+)

- .Tạo Service trung gian (data.service.ts):

```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private messageSource = new BehaviorSubject<string>('Dữ liệu mặc định');
  currentMessage = this.messageSource.asObservable(); // Các component sẽ subscribe dòng này

  changeMessage(message: string) {
    this.messageSource.next(message); // Cập nhật dữ liệu mới
  }
}
```

- `.Component gửi dữ liệu`: Gọi hàm changeMessage().

- `.Component nhận dữ liệu`: Inject service vào constructor và `subscribe()` thuộc tính `currentMessage` để luôn nhận dữ liệu mới nhất khi có thay đổi

- `import`: Từ khóa này được sử dụng để nhập các module hoặc thành phần từ các tệp khác. Nó cho phép bạn sử dụng các thành phần hoặc chức năng bên ngoài trong mã của mình.
- `Component`: Đây là một decorator được sử dụng để xác định một component trong Angular. Component là các phần tử cơ bản tạo ra giao diện trong ứng dụng Angular. Mỗi component có thể có logic riêng và quản lý phần giao diện và hành vi của một phần giao diện người dùng.
- `EventEmitter`: Đây là một lớp được sử dụng để phát đi các sự kiện từ một component. Nó cho phép bạn gửi dữ liệu từ một component này sang một component khác, giúp kiểm soát và tương tác giữa chúng. EventEmitter rất hữu ích trong việc xử lý dữ liệu khi có sự kiện xảy ra (ví dụ: nút được nhấn).
- `@Output`: Đây là một decorator được sử dụng để chỉ định rằng một thuộc tính sẽ phát đi một sự kiện ra ngoài component. Nó cho phép các component con thông báo cho các component cha hoặc các component khác về các hành động hoặc thay đổi bên trong của chúng.

# Snapshot:

`snapshot` thường được hiểu là **ActivatedRouteSnapshot**. Đây là một đối tượng tĩnh (ảnh chụp nhanh) cung cấp trạng thái hiện tại của một route tại thời điểm thành phần được tạo, bao gồm các tham số URL, query parameter và dữ liệu truyền vào.

Dưới đây là cách sử dụng và các khái niệm cốt lõi của snapshot:

1. Cách truy cập dữ liệu qua Snapshot

Bạn inject `ActivatedRoute` vào trong component và truy cập thuộc tính `.snapshot`

```import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chi-tiet',
  template: `...`
})
export class ChiTietComponent implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    // 1. Lấy Route Parameter (ví dụ: /chi-tiet/:id)
    const id = this.route.snapshot.paramMap.get('id');

    // 2. Lấy Query Parameter (ví dụ: /chi-tiet?search= angular)
    const search = this.route.snapshot.queryParamMap.get('search');
    
    // 3. Lấy Data được truyền trực tiếp qua route (ví dụ: title)
    const title = this.route.snapshot.data['title'];
  }
}
```

2. Sự khác biệt: Snapshot vs Observable

- Snapshot (.snapshot): Lấy giá trị một lần duy nhất tại thời điểm component khởi tạo.
- Observable (ví dụ: .paramMap.subscribe()): Lắng nghe liên tục. Nếu người dùng thay đổi tham số (ví dụ: bấm một nút link sang một ID khác nhưng dùng chung một component), dữ liệu sẽ tự động cập nhật mà không cần load lại trang.

3. Khi nào nên dùng Snapshot?
- Sử dụng snapshot khi bạn biết chắc chắn rằng component sẽ luôn bị huỷ và khởi tạo lại mỗi khi người dùng thay đổi đường dẫn hoặc tham số trên URL.
- Nó giúp code ngắn gọn, dễ đọc, không cần phải quản lý việc hủy đăng ký (unsubscribe).

4. Hạn chế
- Nếu component vẫn đang hiển thị trên màn hình (không bị hủy) và URL chỉ thay đổi phần queryParams, snapshot sẽ không tự cập nhật. Trong trường hợp đó, bạn bắt buộc phải dùng Observable.


# RxJS:

1. RxJS, which stands for Reactive Extensions for JavaScript, is a powerful library for handling asynchronous programming in JavaScript applications, especially in Angular. Here’s a simple explanation of its main components:
- `Observables`: At the core of RxJS are observables, which represent streams of data that can be observed over time. These streams can emit values at any point, allowing developers to react to changing data.
- `Operators`: RxJS includes a variety of operators that allow developers to manipulate and transform data streams efficiently. For instance, operators like map, filter, and mergeMap enable you to modify data and manage how it flows through your application.
- `Subscriptions`: To use an observable, you need to subscribe to it. A subscription is a way to execute the observable and receive notifications whenever it emits new values or encounters errors.
- `Event Handling`: RxJS facilitates event handling in Angular applications by allowing the creation of observable streams from user interactions (like clicks or keystrokes). This helps in dynamically updating the user interface in response to these events.
- `Reactive Programming`: Overall, RxJS promotes a reactive programming model, making it easier for developers to create applications that respond to changing data over time.

By leveraging these features, developers can build more responsive and efficient applications, making RxJS a valuable tool in Angular development.
Was this content relevant to you?

2. Using RxJS in Angular applications offers several crucial benefits:

- `Handling Asynchronous Operations`: Angular applications often require fetching data from servers, which involves asynchronous tasks. RxJS simplifies this process by providing tools like observables to handle these operations consistently and manageably, resulting in cleaner and more maintainable code.
- `Event Handling and UI Updates`: Interactive web applications need to respond to user events like button clicks or mouse movements. RxJS allows developers to create observable streams from these events, enabling dynamic UI updates in response to user interactions.
- `Data Transformation and Manipulation`: RxJS provides a wide variety of operators that facilitate data transformation and manipulation within observables. For example, operators like map, filter, and mergeMap help modify data streams and apply conditional logic, making data processing efficient and concise.
- `Reactive Programming Paradigm`: By using RxJS, developers can adopt a reactive programming model, which enhances the responsiveness of applications to data changes over time, ultimately leading to a more engaging user experience.

In summary, RxJS empowers developers to create more responsive, efficient, and manageable Angular applications by effectively handling asynchronous operations, managing events, and transforming data streams.
Was this content relevant to you?

## Promises:

1. A Promise in JavaScript is a way to handle asynchronous operations and represents a value that may be available now, or in the future, or never. Here's a simple breakdown of its key concepts:

- States: A Promise can be in one of three states:
   - Pending: The initial state, meaning the Promise is still waiting for a result.
   - Fulfilled: The operation completed successfully, resulting in a resolved value.
   - Rejected: The operation failed, resulting in an error.

2. Using Promises:

- When a Promise is created, it takes a function (executor) that contains two functions: `resolve` and `reject`. The `resolve` function is called when the operation is successful, while `reject` is called when there is an error.

- You can handle the results of a Promise using the `.then()` method for resolved values and `.catch()` for errors.

Example:

- If you're making an HTTP request, you might create a Promise that attempts to fetch data. If the data is successfully fetched, the Promise is resolved. If there’s an error (like a network issue), the Promise is rejected.
- Error Handling: The .catch() method allows you to handle errors gracefully when a Promise is rejected, ensuring your application can respond to failures appropriately.

## Observables:

1. Observable is a core concept in RxJS and plays a vital role in reactive programming. Here’s a breakdown of what observables are:
- Definition: An observable is a programming construct that allows you to manage asynchronous data streams. It provides a way to observe changes in data over time, enabling developers to react to those changes dynamically.
- Data Streams: Observables can emit multiple values over time, representing a continuous stream of data. This is especially useful for handling events such as user interactions, HTTP requests, or timers.
- Observer Pattern: Observables work on the observer pattern, where one or more observers subscribe to an observable to receive notifications when new data is emitted. Each observer gets notified whenever there is a change, allowing for real-time updates in applications.

Key Functions:

- Next: Used to send data to subscribers.
- Error: Notifies subscribers if an error occurs during the data stream.
- Complete: Indicates that the observable has finished sending data.
- Usage: Observables are particularly beneficial in Angular applications for managing data flows, making it easier to handle asynchronous operations and improve application responsiveness.

In summary, observables serve as a powerful tool in reactive programming, allowing for the seamless observation and management of data streams and events in a flexible and efficient manner.

## Operators:

1. Toán tử `map` trong RxJS (dùng bên trong hàm `.pipe()`) là một toán tử biến đổi dữ liệu (Transformation Operator). Nó có cách hoạt động tương tự như hàm `.map()` của mảng trong JavaScript, nhưng áp dụng cho một luồng dữ liệu theo thời gian.Khi một giá trị được phát ra từ nguồn (Observable), toán tử `map` sẽ bắt lấy giá trị đó, áp dụng một hàm biến đổi do bạn định nghĩa, rồi phát kết quả mới xuống cho người đăng ký (`subscribe`)

```
import { map } from 'rxjs/operators';

observableNguon.pipe(
  map(giaTriGoc => giaTriMoi)
).subscribe(data => console.log(data));
```

2. Toán tử `filter` trong RxJS (được sử dụng bên trong hàm `.pipe()`) là một toán tử lọc dữ liệu (Filtering Operator). Nó hoạt động dựa trên một điều kiện do bạn đưa ra (hàm điều kiện trả về `true` hoặc `false`).

- Nếu điều kiện là `true`: Dữ liệu được phép đi qua và truyền tiếp xuống cho người đăng ký (subscribe).
- Nếu điều kiện là `false`: Dữ liệu bị chặn lại ngay lập tức và không phát ra ngoài.


```
import { filter } from 'rxjs/operators';

observableNguon.pipe(
  filter(giaTri => dieuKienThoaMan)
).subscribe(data => console.log(data));
```
## Subject:

Trong RxJS, Subject là một loại Observable đặc biệt. Điểm độc đáo của nó là vừa đóng vai trò là một Observable (để truyền dữ liệu cho người khác nghe), vừa đóng vai trò là một Observer (có thể tự phát ra dữ liệu mới bằng hàm `.next()`).

Nếu một Observable thông thường giống như một kênh xem phim Netflix (mỗi người bấm xem sẽ xem từ đầu, độc lập nhau), thì Subject giống như một rạp chiếu phim ngoài đời hoặc một buổi Livestream (ai vào muộn sẽ chỉ xem được đoạn đang phát, mọi người cùng xem chung một nội dung tại một thời điểm).

1. Đặc điểm cốt lõi của Subject
- **Tính chất Multicast (Phát đa hướng)**: Một Subject có thể chia sẻ cùng một luồng dữ liệu cho nhiều người đăng ký (subscribe) cùng lúc. Khi Subject phát ra dữ liệu, tất cả người nghe đều nhận được giá trị giống nhau.
- **Có khả năng chủ động phát dữ liệu**: Bạn có thể gọi `subject.next(gia_tri)` ở bất kỳ đâu trong code để đẩy một dữ liệu mới vào luồng.
- **Không lưu lại lịch sử (đối với Subject cơ bản)**: Những ai `subscribe` sau khi dữ liệu đã phát sẽ không nhận được các giá trị cũ trước đó.

2. Cách dùng cơ bản:
```
import { Subject } from 'rxjs';

// 1. Khởi tạo một Subject
const mySubject = new Subject<number>();

// 2. Người nghe thứ nhất đăng ký
mySubject.subscribe(val => console.log('Người nghe A:', val));

// 3. Chủ động phát dữ liệu
mySubject.next(1); // Cả A nhận được: 1
mySubject.next(2); // Cả A nhận được: 2

// 4. Người nghe thứ hai đăng ký vào muộn
mySubject.subscribe(val => console.log('Người nghe B:', val));

// 5. Phát tiếp dữ liệu
mySubject.next(3); 
// Kết quả in ra:
// Người nghe A: 3
// Người nghe B: 3 (B vào muộn nên KHÔNG nhận được số 1 và 2)
```

3. Bốn loại Subject phổ biến trong RxJS:

Tùy vào nhu cầu lưu trữ và phát lại dữ liệu, RxJS chia Subject thành 4 loại chính:

-  Standard Subject (Subject)
   - Đặc điểm: Không có giá trị khởi tạo, không giữ lại giá trị cũ. Ai vào sau thì ráng chịu.
   - Ứng dụng: Thường dùng để bắt các sự kiện click, thông báo hành động (ví dụ: nút "Đăng xuất" được bấm).
   
-  BehaviorSubject (Dùng nhiều nhất trong Angular)
   -  Đặc điểm: Bắt buộc có một giá trị khởi tạo. Nó luôn luôn ghi nhớ giá trị mới nhất vừa phát. Bất kỳ ai subscribe vào nó (dù muộn đến đâu) cũng sẽ lập tức nhận được giá trị mới nhất đó ngay khi vừa đăng ký.
   - Ứng dụng: Làm State Management (quản lý trạng thái), lưu thông tin User đăng nhập, lưu trạng thái bật/tắt của giao diện (Dark/Light mode).
   
- ReplaySubject
  - Đặc điểm: Có khả năng ghi nhớ một số lượng cấu hình trước các giá trị cũ (ví dụ: nhớ 3 giá trị gần nhất). Khi có người mới subscribe, nó sẽ "tua lại" toàn bộ số giá trị đó cho người mới nghe.
  - Ứng dụng: Lưu lại lịch sử thao tác của người dùng, hoặc lưu bộ nhớ đệm (cache) dữ liệu.

- AsyncSubject
  - Đặc điểm: Chỉ phát ra duy nhất giá trị cuối cùng của luồng dữ liệu, và chỉ phát khi luồng đó đã gọi hàm .complete().
  - Ứng dụng: Dùng cho các tác vụ tính toán lớn, chỉ cần lấy kết quả chung cuộc khi mọi thứ đã xong xuôi.


In RxJS, a BehaviorSubject is a special type of subject that retains the last emitted value and emits it immediately to new subscribers. Here are some key features and use cases for BehaviorSubject:
- Initial Value: BehaviorSubject requires an initial value when you create it. This value will be emitted immediately to any new subscribers, making it useful for scenarios where you want to provide a default state.
- State Management: Because it holds onto the latest value, BehaviorSubject is often used for state management in Angular applications. It ensures that any component or service can get the most recent state at any time.
- Multicasting: Like other subjects, BehaviorSubject multicasts to multiple subscribers. When a value is emitted from the BehaviorSubject using .next(value), all currently subscribed observers will receive the new value.
- Inter-Component Communication: BehaviorSubjects enable components to communicate directly. A component can update the BehaviorSubject, and any other component subscribing to it will receive the update immediately.
- Use Cases: Common use cases include maintaining user session states, managing form data, providing real-time updates to multiple parts of an application, and handling shared data.

By utilizing BehaviorSubjects, you can create more responsive and interactive applications that efficiently manage the state and communication between components.
