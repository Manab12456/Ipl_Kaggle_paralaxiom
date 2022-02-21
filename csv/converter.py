import pandas as pd
import mysql.connector as msql
from mysql.connector import Error


def read_from_cv(file_name):
    read_data= pd.read_csv(file_name)
    read_data.head()
    generated_data=read_data.fillna('')#incase the row is empty fill with ''
    return generated_data

def insert_into_table(host_,user_,passwrod_,db_name,generated_data, table_name_,id_):
    try:
        conn = msql.connect(host=host_,database=db_name, user=user_, password=passwrod_)
        if conn.is_connected():
            cursor = conn.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ",record)
            if id_:
                generated_data.insert(0,'id',list(range(1,len(generated_data)+1)),True)
            
            for i,row in generated_data.iterrows():
                num=len(row)
                num_of_s='%s'
                while num>1:
                    num=num-1
                    num_of_s=num_of_s+' ,%s'
                sql101 ="INSERT INTO "+table_name_+" VALUES ("+num_of_s+")"
                cursor.execute(sql101, tuple(row))
                print("Record inserted",i)
                # the connection is not autocommitted by default, so we must commit to save our changes
                conn.commit()
            
    except Error as e:
        print("Error while connecting to MySQL", e)



#Creat the appropriate tables in the data base first for this code to work properly.
generated_data1=read_from_cv('matches.csv')
table_name_1='home_app_matches'
insert_into_table('localhost','root','root','ipl_db', generated_data1, table_name_1,False)


generated_data2=read_from_cv('deliveries.csv')
table_name_2='home_app_deliveries'
insert_into_table('localhost','root','root','ipl_db', generated_data2, table_name_2,True)
