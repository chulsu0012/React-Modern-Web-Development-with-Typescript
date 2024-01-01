import { MongoClient, Db } from "mongodb"

export type MongoDB = Db
export type ConnectCallback = (db: MongoDB) => void

export const connectAndUseDB = async (
  callback: ConnectCallback,
  dbName: string,
  mongoUrl: string = 'mongodb://127.0.0.1:27017'
) => {
  let connection
  try {
    connection = await MongoClient.connect(mongoUrl)  // 몽고DB와 연결
    const db: Db = connection.db(dbName)              // mongo shell의 'use dbName'
    callback(db)                                      // db 객체를 콜백 함수의 매개변수로 호출
  } catch(e) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
}