package com.lyj.config;


import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 登录过滤器
 *
 * @author liuyujie
 */
public class LoginFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String currPath = request.getRequestURI();    //当前请求的URL

        //不需要过滤的url
        String[] urls = {"/login.do", "/json", ".js", ".css", ".ico", ".jpg", ".png","/register.do","/login.jsp"};
        boolean flag = true;
        for (String str : urls) {
            if (currPath.indexOf(str) != -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            HttpSession session = request.getSession();
            if (session.getAttribute("user_token") != null) {
                filterChain.doFilter(servletRequest, servletResponse);
            } else {
                response.sendRedirect("login.do");
            }
        } else {
            filterChain.doFilter(request, response);
        }
    }

    @Override
    public void destroy() {

    }
}
