import { _decorator, director, error, math, sys } from 'cc';
const { ccclass } = _decorator;

// 防止wx编译报错
const wx = window['wx'];

@ccclass('Data')
export class Data {

    //================================= 单例 =========================================

    // 单例
    private static _instance: Data;

    /**
     * 获取全局管理器单例实例
     * @returns {Data} 全局管理器实例
     */
    static getInstance(): Data {
        if (!Data._instance) {
            Data._instance = new Data();
        }
        return Data._instance;
    }
}

export const global = Data.getInstance();
