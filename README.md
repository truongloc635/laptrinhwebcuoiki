# Hướng dẫn chạy Backend Ba Bếp Food

## Yêu cầu hệ thống
- Python 3.8 hoặc cao hơn
- Pip (trình quản lý gói của Python)

## Các bước cài đặt

### 1. Cài đặt môi trường ảo (Virtual Environment)
- Mở terminal 
- cd home >> cd backend
- Chạy lệnh sau để tạo môi trường ảo:
```
python -m venv env
```

### 2. Kích hoạt môi trường ảo
- Trên Windows:
```
env\Scripts\activate
```
- Trên MacOS/Linux:
```
source env/bin/activate
```

### 3. Cài đặt các thư viện cần thiết
```
pip install -r requirements.txt
```

### 4. Chạy server
```
uvicorn main:app --reload --port 8000
```

Server sẽ chạy tại địa chỉ: http://localhost:8000
