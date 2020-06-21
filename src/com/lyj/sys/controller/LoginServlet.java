package com.lyj.sys.controller;

import com.lyj.util.AjaxUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 登录Servlet
 *
 * @author liuyujie
 */
public class LoginServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String url = request.getRequestURL().toString();
        String path = url.substring(url.lastIndexOf("/"), url.length());
        if (path.equals("/login.do")) {
            //登录页
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        } else if (path.equals("/index.do")) {
            //前台首页
            request.getRequestDispatcher("/WEB-INF/view/front/index.jsp").forward(request, response);
        }else if (path.equals("/register.do")){
            //注册页
            request.getRequestDispatcher("/register.jsp").forward(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String url = request.getRequestURL().toString();
        String path = url.substring(url.lastIndexOf("/"), url.length());
        // 获取session
        HttpSession session = request.getSession();
        if(path.equals("/login.do")){
            session.setAttribute("user_token", "user");
            Map<String, Object> map = new HashMap<>();
            map.put("code", 200);
            map.put("msg", "登录成功");
            AjaxUtil.printJson(response,map);
        }else if(path.equals("/logout.do")){
            session.removeAttribute("user_token");
            session.invalidate();
            Map<String, Object> map = new HashMap<>();
            map.put("code", 200);
            map.put("msg", "注销");
            AjaxUtil.printJson(response,map);
        }
    }
}
