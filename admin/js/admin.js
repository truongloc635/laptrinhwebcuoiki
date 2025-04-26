document.addEventListener('DOMContentLoaded', () => {
    // Lấy các tab và phần tử main-content
    const navTabs = document.querySelectorAll('.nav-tab');
    const mainContent = document.querySelector('.main-content');
  
    // Xử lý khi click vào tab
    navTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Lấy id tab (bỏ phần .html)
        const tabId = tab.getAttribute('data-tab').replace('.html', '');
        
        // Bỏ active ở tất cả các tab
        navTabs.forEach(t => t.classList.remove('active'));
        
        // Thêm active cho tab được chọn
        tab.classList.add('active');
        
        // Xóa nội dung hiện tại của main-content
        mainContent.innerHTML = '';
        
        // Tải nội dung mới từ file tương ứng
        fetch(`${tabId}.html`)
          .then(response => response.text())
          .then(html => {
            mainContent.innerHTML = html;
          })
          .catch(error => {
            mainContent.innerHTML = `
              <div class="error-message">
                <h3>Không thể tải nội dung</h3>
                <p>${error.message}</p>
                <button onclick="location.reload()">Thử lại</button>
              </div>`;
          });
      });
    });
  });