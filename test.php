<?php 
        header("Content-Type:text/html;charset=utf-8"); 
        echo "<br><br><br><br><br><br><br>";
        /*用户名　 :  SAE_MYSQL_USER
        密　　码 :  SAE_MYSQL_PASS
        主库域名 :  SAE_MYSQL_HOST_M
        从库域名 :  SAE_MYSQL_HOST_S
        端　　口 :  SAE_MYSQL_PORT
        数据库名 :  SAE_MYSQL_DB*/        
        
        $db_host=SAE_MYSQL_HOST_M;
		$db_user=SAE_MYSQL_USER;
        $db_password=SAE_MYSQL_PASS;
        $dbase_name=SAE_MYSQL_DB;
        $db_port=SAE_MYSQL_PORT;

        $mysqli=new mysqli($db_host,$db_user,$db_password,$dbase_name,$db_port);
        if ($mysqli->connect_error) {
                echo $mysqli->connect_error;
        }else{
                echo "连接成功";
        }

        echo "<hr>";
        echo "<br>用户名:".SAE_MYSQL_USER."<br>";
        echo "密码:". SAE_MYSQL_PASS.'<br>';
        echo "主库域名:".SAE_MYSQL_HOST_M."<br>";
        echo "从库域名:".SAE_MYSQL_HOST_S."<br>";
        echo "端口".SAE_MYSQL_PORT."<br>";
        echo "数据库名:".SAE_MYSQL_DB."<br>";
        

?>