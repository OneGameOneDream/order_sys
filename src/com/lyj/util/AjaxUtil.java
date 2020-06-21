package com.lyj.util;

import com.alibaba.fastjson.JSON;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AjaxUtil {

    /**
     * 返回json
     * @param response
     * @param json
     */
    public static void printJson(HttpServletResponse response,Object obj) throws IOException {
        // 解决json中文乱码
        response.setContentType("text/json;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        String json = JSON.toJSONString(obj);
        out.println(json);
        out.flush();
        out.close();
    }
}
