import sqlite3
"""Ket noi toi co so du lieu"""


path = "./user.db"
def createdatabase(path:str):
    conn = sqlite3.connect(path)
    with open("user.sql","r",encoding="utf-8") as f:
        __sql__ = f.read()

    conn.executescript(__sql__)
    conn.commit()
    conn.close()

    print("tao bang thanh cong")

class Connect():
    def __init__(self):
        self.path = "./user.db"
        self.conn = sqlite3.connect(self.path)
        self.cursor = self.conn.cursor()
    def connectdb(self):
        self.conn.commit()
        return self.conn
    def getdb(self):
        sql = str(input("Nhap cau lenh sql: "))
        self.cursor.execute(sql)
        print(self.cursor.fetchall())        
        
        
conn = Connect()
conn.connectdb()
conn.getdb()
