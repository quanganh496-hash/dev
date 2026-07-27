# 1. Giải thích khái niệm 🟢
- **Định nghĩa**: Nx là một nền tảng xây dựng (build platform) mã nguồn mở, không phụ thuộc vào công nghệ (technology agnostic), được thiết kế để quản lý các kho mã nguồn (codebase) ở mọi quy mô.
- **Tại sao quan trọng**: Khi dự án phát triển, việc quản lý công cụ build, tích hợp cấu hình và tối ưu hóa hệ thống CI trở nên cực kỳ phức tạp. Nx giúp giảm bớt gánh nặng này bằng cách tự động hiểu cấu trúc dự án, quản lý dependencies và tối ưu hóa việc thực thi tác vụ.
- **Ứng dụng thực tế**: Giống như một "trợ lý du lịch" lo liệu việc đặt vé và khách sạn để bạn tập trung tận hưởng chuyến đi, Nx lo liệu việc cấu hình công cụ, tối ưu hóa tốc độ build để lập trình viên tập trung viết code và chuyển giao tính năng.
# 2. Kiến thức nền 🟡
- **Monorepo**: Một kho lưu trữ duy nhất chứa nhiều dự án/ứng dụng khác nhau.
- **Build Pipeline**: Quy trình tự động hóa các bước từ biên dịch, kiểm thử đến đóng gói phần mềm.
- **Caching (Bộ nhớ đệm)**: Lưu trữ kết quả của các tác vụ trước đó để không phải chạy lại nếu mã nguồn không thay đổi.
- **Task Orchestration**: Việc quản lý thứ tự và cách thức thực hiện các câu lệnh (build, test, lint) sao cho hiệu quả nhất.
# 3. Giải thích chi tiết 🟢
## Phần 1: Nx Core và Phân tích Workspace

![alt text](image.png)

- **Giải thích**: Phần lõi của Nx được viết bằng Rust, chịu trách nhiệm phân tích cấu trúc dự án, quản lý bộ nhớ đệm và cung cấp giao diện terminal chuyên dụng.
- **Ví dụ thực tế**: Khi bạn thêm Nx vào một thư mục có sẵn bằng lệnh `nx init`, nó sẽ tự động tạo file `nx.json` để định nghĩa các task có thể cache.
- **Minh họa**: Lệnh `nx graph` cung cấp cái nhìn trực quan về mối quan hệ giữa các dự án (app, package) trong workspace.
- **Lưu ý**: Người mới thường quên không cấu hình `targetDefaults` trong `nx.json`, dẫn đến việc cache không hoạt động tối ưu.
## Phần 2: Nx Plugins và DX (Developer Experience)

![alt text](image-2.png)

- **Giải thích**: Các add-on on top of NX core tùy chọn dành cho các công nghệ cụ thể (React, Angular, Node, Java, v.v.). Chúng giúp trừu tượng hóa các cấu hình phức tạp và cung cấp công cụ tạo mã (code generation).
- **Ví dụ thực tế**: Thay vì tự viết cấu hình Vite, bạn cài đặt `nx add @nx/vite`. Nx sẽ tự động đồng bộ hóa cấu hình từ file `vite.config.ts` vào hệ thống task của nó.
- **Lỗi thường gặp**: Cố gắng cấu hình thủ công các script trong `package.json` trong khi Nx Plugin có thể tự động suy luận (inference) từ công cụ gốc.

## Phần 3: Nx MCP (Model Context Protocol) & Tích hợp AI 🟢

![alt text](image-3.png)

- **Giải thích**: Trong kỷ nguyên AI, các trợ lý lập trình (LLM) cần thông tin chính xác về dự án để hỗ trợ tốt nhất. Nx MCP là một server đóng vai trò "cầu nối" cung cấp toàn bộ dữ liệu và kiến thức mà Nx có về workspace cho các trợ lý AI (như Claude, Cursor, hoặc Copilot). Thay vì chỉ đọc từng file riêng lẻ, AI giờ đây có thể hiểu được ngữ cảnh toàn cục của dự án.
- **Ví dụ thực tế**: Khi bạn sử dụng một trình soạn thảo hỗ trợ AI (như Cursor hoặc VS Code với Nx Console), bạn không cần phải giải thích cấu trúc dự án cho AI nữa. Bạn chỉ cần hỏi những câu hỏi mang tính chiến lược về kiến trúc.

- **Lưu ý và các lỗi người mới thường gặp**:
  - Lỗi: Cố gắng copy-paste hàng chục file code vào khung chat AI để nhờ giải thích quan hệ giữa các module.
  - Cách đúng: Sử dụng Nx MCP để AI tự truy cập vào kiến thức về workspace, giúp tiết kiệm thời gian và đảm bảo độ chính xác cao hơn vì AI "thấy" được toàn bộ cấu trúc thực tế của dự án


## Phần 4: CI và Nx Cloud

![alt text](image-5.png)

- Giải thích: Tích hợp với CI provider để tăng tốc độ build thông qua Remote Caching và Distributed Task Execution (DTE).
- Tính năng mới (2025): Self-healing CI – Nx Cloud có thể tự động sửa các Pull Request (PR) bị lỗi do sai sót nhỏ và đẩy trực tiếp bản sửa lỗi vào PR của bạn.
# 4. Minh họa 🟡
## So sánh Quy trình làm việc truyền thống vs. Nx:

![alt text](image-7.png)

## 1. Giải thích khái niệm: Nx Graph là gì? 🟢
- Định nghĩa dễ hiểu: Hãy tưởng tượng dự án của bạn là một thành phố. Các ứng dụng (apps) là các tòa nhà lớn, và các thư viện (libraries) là các trạm cung cấp điện, nước. Nx Graph chính là bản đồ quy hoạch cho thấy đường dây điện nào dẫn đến tòa nhà nào.
- Tại sao quan trọng: Khi bạn thay đổi một đường dây điện (sửa code ở thư viện), bạn cần biết chính xác những tòa nhà nào (ứng dụng nào) sẽ bị ảnh hưởng để kiểm tra lại.
- Ứng dụng: Nx sử dụng bản đồ này để biết rằng: "À, trước khi xây tòa nhà (build app), tôi phải hoàn thành trạm điện (build library) trước".
## 2. Minh họa bằng sơ đồ ASCII chi tiết 🟡
Giả sử bạn có một hệ thống bán hàng. Chúng ta sẽ mô phỏng mối quan hệ phụ thuộc (dependencies) bằng sơ đồ sau:
### Sơ đồ luồng phụ thuộc:

```   
      +----------------+           +----------------+
      |  Ứng dụng SHOP |           |  Ứng dụng ADMIN|
      +-------+--------+           +-------+--------+
              |                            |
              |      (phụ thuộc vào)       |
              v                            v
      +---------------------------------------------+
      |             Thư viện UI Chung               |
      |       (Nút bấm, Header, Layout...)          |
      +----------------------+----------------------+
                             |
                             | (phụ thuộc vào)
                             v
      +---------------------------------------------+
      |            Thư viện CORE UTILS              |
      |         (Xử lý tiền tệ, API...)             |
      +---------------------------------------------+
```
### Giải thích sơ đồ:
- Mũi tên (v): Chỉ hướng phụ thuộc. Ví dụ: `SHOP` cần `UI Chung` để hoạt động.
- Thứ tự xây dựng (Build Order): Nếu bạn ra lệnh build `SHOP`, Nx sẽ nhìn vào sơ đồ này và tự động chạy: `CORE UTILS` -> `UI Chung` -> `SHOP`.
- Phân tích tác động: Nếu bạn sửa một dòng code trong `CORE UTILS`, Nx nhìn vào sơ đồ và biết ngay cả `SHOP` và `ADMIN` đều có thể bị lỗi, vì cả hai đều gián tiếp dùng nó.

![alt text](image-8.png)


# Đọc thêm:

## Trong Nx, lưu bộ nhớ đệm (cachable) là một cơ chế thông minh giúp hệ thống "ghi nhớ" kết quả của các tác vụ (tasks) đã thực hiện, đảm bảo bạn không bao giờ phải build hoặc test lại cùng một đoạn mã hai lần. Đây là tính năng cốt lõi giúp Nx giảm thiểu ma sát trong toàn bộ chu kỳ phát triển và giữ cho tốc độ CI luôn nhanh chóng ngay cả khi dự án mở rộng.

Dưới đây là giải thích chi tiết hơn về cơ chế này dựa trên các nguồn tài liệu:
### 1. Cách Nx xác định một tác vụ có thể Cache
Việc một tác vụ có được lưu cache hay không thường được định nghĩa trong file cấu hình nx.json. Nx dựa vào hai yếu tố chính:
Inputs (Đầu vào): Bao gồm mã nguồn của dự án, các file cấu hình (như vite.config.ts) và các phụ thuộc bên ngoài (như phiên bản package npm). Nếu tất cả đầu vào này không thay đổi, Nx hiểu rằng kết quả đầu ra sẽ giống hệt lần chạy trước.
Outputs (Đầu ra): Là các thư mục hoặc file được tạo ra sau khi chạy tác vụ (ví dụ: thư mục /dist sau khi build). Nx sẽ lưu lại các bản sao của đầu ra này vào bộ nhớ đệm.
### 2. Hai cấp độ lưu bộ nhớ đệm
Local Caching (Cục bộ): Đây là tính năng của Nx Core, hoạt động ngay trên máy tính cá nhân của bạn. Nó giúp bạn tiết kiệm thời gian khi chuyển qua lại giữa các nhánh (branches) hoặc khi thực hiện các thay đổi nhỏ.
Remote Caching (Từ xa - Nx Replay): Khi tích hợp với Nx Cloud, bộ nhớ đệm sẽ được chia sẻ lên đám mây. Điều này cho phép các máy tính khác nhau (máy của đồng nghiệp hoặc các máy chạy CI) sử dụng lại kết quả của nhau. Nếu máy CI đã build xong một thư viện, máy của bạn chỉ cần tải kết quả đó về thay vì tự build lại.
### 3. Cơ chế "Làm mới" Cache (Invalidation)
Nx rất cẩn thận để đảm bảo cache luôn chính xác. Nếu bạn thay đổi bất kỳ cấu hình nào của công cụ gốc (ví dụ: thay đổi outputDirectory trong cấu hình Vite), Nx sẽ tự động nhận diện sự thay đổi đó và vô hiệu hóa cache cũ (invalidate) để chạy lại tác vụ với thông số mới. Điều này giúp đảm bảo kết quả bạn nhận được luôn đúng với trạng thái hiện tại của mã nguồn.
### 4. Tại sao một số tác vụ không nên Cache?
Mặc dù caching rất mạnh mẽ, nhưng không phải lệnh nào cũng có thể lưu cache.
Tác vụ nên Cache: build, test, lint. Đây là những tác vụ có đầu vào và đầu ra xác định (deterministic).
Tác vụ không nên Cache: serve, start. Vì đây là các tác vụ chạy liên tục (vòng lặp vô tận) và không tạo ra một kết quả tĩnh để lưu trữ.
### 5. Lợi ích trong thực tế
Tăng tốc CI: Thay vì chạy hàng nghìn tác vụ mỗi khi có Pull Request, CI chỉ chạy những phần bị thay đổi, phần còn lại được lấy từ cache.
Giảm "Time to Green": Giảm thời gian chờ đợi cho đến khi Pull Request của bạn sẵn sàng để review.

## File `nx.json` được coi là "bộ não" điều hành toàn bộ Workspace của Nx. Nó cấu hình cách Nx CLI hoạt động, thiết lập các giá trị mặc định cho project và định nghĩa các quy trình tự động hóa cốt lõi.

Dưới đây là giải thích sâu hơn về các thành phần quan trọng nhất trong file này dựa trên tài liệu chính thức:
### 1. Cấu hình Plugin & Suy luận Task (Plugins & Task Inference) 🟢
Nx sử dụng các plugin để tự động hiểu và cấu hình các công cụ trong workspace (như Vite, Jest, Cypress).
Cơ chế: Khi bạn đăng ký một plugin trong mảng plugins, Nx sẽ tự động tạo ra các task (inferred tasks) dựa trên file cấu hình của công cụ đó (ví dụ: vite.config.ts).
Phạm vi (Scoping): Bạn có thể giới hạn plugin chỉ áp dụng cho một số thư mục nhất định bằng thuộc tính include hoặc exclude sử dụng mẫu glob.
Mẫu phủ định (Negation patterns): Sử dụng dấu ! để loại trừ các dự án cụ thể (ví dụ: loại trừ tất cả dự án e2e trừ một dự án quan trọng).
### 2. Giá trị mặc định cho Target (Target Defaults) 🟢
Đây là nơi bạn cấu hình các tùy chọn dùng chung cho các lệnh (build, test, lint) trên toàn bộ workspace để tránh lặp lại cấu hình.
Bộ lọc (Filters): Bạn có thể áp dụng cấu hình mặc định cho tất cả các task cùng tên, hoặc lọc theo plugin, projects, hoặc executor cụ thể.
Đề đè (Override): Các mục cấu hình xuất hiện sau trong file sẽ ghi đè các mục phía trước.
Lưu ý: Bất kỳ thứ gì được thiết lập trong targetDefaults sẽ ghi đè lên cấu hình của các task được suy luận từ plugin.
### 3. Pipeline tác vụ (Task Pipelines - dependsOn) 🟢
Nx cho phép bạn định nghĩa mối quan hệ giữa các task để đảm bảo chúng chạy đúng thứ tự.
Ví dụ: dependsOn: ["^build"] trong phần build có nghĩa là trước khi build một ứng dụng, tất cả các thư viện phụ thuộc của nó phải được build xong trước.
Lợi ích: Giúp tự động hóa các quy trình phức tạp mà không cần quản lý thủ công.
### 4. Quản lý Cache & Đầu vào/Đầu ra (Inputs, Outputs & Caching) 🟢
Inputs & NamedInputs: Định nghĩa những gì được coi là "đầu vào" để Nx tính toán mã băm (hash) cho cache. Bạn có thể định nghĩa namedInputs (ví dụ: sharedGlobals) ở cấp root và tái sử dụng chúng trong các project.
Outputs: Chỉ định thư mục chứa kết quả của task (ví dụ: {projectRoot}/dist). Nx sẽ lưu các file này vào cache để phục hồi lại sau này mà không cần chạy lại task.
Bật Cache: Sử dụng "cache": true để cho phép Nx lưu trữ kết quả. Điều này là bắt buộc nếu bạn muốn sử dụng tính năng thực thi tác vụ phân tán (Nx Agents).
### 5. Mã Spread (Spread Token "...") 🟢
Đây là một tính năng nâng cao giúp trộn (merge) cấu hình thay vì ghi đè hoàn toàn.
Trong mảng: "..." được thay thế bằng các mục từ mảng cơ sở tại vị trí đó (ví dụ: thêm một file config toàn cục vào mảng inputs mà vẫn giữ các input mặc định của plugin).
Trong đối tượng: Giúp thêm các option mới mà không làm mất đi các option đã được plugin thiết lập sẵn.
### 6. Các cấu hình hệ thống khác 🟢
Cấu hình Release: Quản lý quy trình xuất bản phiên bản (versioning), tạo changelog và đẩy mã lên Git thông qua lệnh nx release.
Giới hạn Cache: Thuộc tính maxCacheSize cho phép giới hạn dung lượng cache cục bộ (mặc định là 10% ổ đĩa hoặc tối đa 10GB). Nx sẽ tự động xóa các mục cũ nhất khi vượt ngưỡng.
Mặc định nhánh (Default Base): defaultBase xác định nhánh gốc (thường là main) để Nx tính toán các dự án bị ảnh hưởng (affected).
Ví dụ minh họa một phần nx.json thực tế 🔵

```
{
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["production", "^production", "{workspaceRoot}/babel.config.json"],
      "cache": true
    },
    "test": {
      "inputs": ["default", "^default", "{workspaceRoot}/jest.preset.js"],
      "cache": true
    }
  },
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "production": ["default", "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)", "!{projectRoot}/tsconfig.spec.json"],
    "sharedGlobals": ["{workspaceRoot}/nx.json"]
  },
  "plugins": [
    {
      "plugin": "@nx/vite/plugin",
      "options": { "buildTargetName": "build" }
    }
  ]
}
```

Tóm tắt các điểm cần nhớ:
- plugins: Tự động hóa việc tạo task từ các công cụ gốc.
- targetDefaults: Nơi cấu hình dependsOn, outputs và cache cho toàn bộ workspace.
- namedInputs: Giúp quản lý cache chính xác bằng cách xác định rõ file nào thay đổi thì cần chạy lại task.
- spread token: Dùng để "merge" cấu hình thay vì "overwrite"

## PR

- Pull Request (PR) là một yêu cầu đề xuất được lập trình viên tạo ra để thông báo rằng họ đã hoàn thành các thay đổi trên mã nguồn (code) và muốn gộp (merge) phần code đó vào nhánh chính (thường là main hoặc master) của dự án chung trên các nền tảng như GitHub hoặc GitLab.

- Quy trình hoạt động của Pull Request

1. Tạo nhánh riêng (Branch): Lập trình viên tạo một nhánh mới độc lập với nhánh chính để chỉnh sửa hoặc thêm tính năng mới mà không ảnh hưởng tới dự án đang chạy.
2. Commit và Push: Sau khi hoàn tất thay đổi trên máy tính cá nhân, họ đẩy (push) code đó lên tài khoản dự án của họ trên GitHub.
3. Tạo Pull Request: Người đó tạo một yêu cầu (PR) trên GitHub đề xuất gộp nhánh của mình vào nhánh chính của dự án gốc.
4. Review và Thảo luận: Các thành viên khác trong nhóm hoặc người quản lý dự án sẽ kiểm tra (review) phần code đó, để lại bình luận góp ý hoặc yêu cầu chỉnh sửa (nếu có).
5. Merge: Khi mọi thứ đạt yêu cầu, người quản lý sẽ chấp thuận và hợp nhất (merge) Pull Request đó vào nhánh chính.

- Lợi ích chính
  - Kiểm soát chất lượng: Giúp đội ngũ đánh giá, phát hiện lỗi hoặc lỗ hổng trước khi đưa code mới vào hệ thống chính.
  - Cộng tác dễ dàng: Cho phép nhiều lập trình viên cùng làm việc trên một dự án mà không ghi đè hoặc làm hỏng code của nhau.
  - Lưu trữ lịch sử: Tạo ra một không gian thảo luận minh bạch, ghi lại toàn bộ lý do và tiến trình thay đổi để dễ dàng theo dõi sau này.