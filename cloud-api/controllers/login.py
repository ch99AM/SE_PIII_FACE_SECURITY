from src.login_logic import check_user_login



def login(body):
    answer = check_user_login(body)
    
    return answer