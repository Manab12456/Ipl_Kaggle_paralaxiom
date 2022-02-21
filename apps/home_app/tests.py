class extra_runs_conceded_per_team_for_YEAR_II(APIView):
    def get(self, request, *args, **kwargs):
        year_list=[]
        temp_list2=[]
        #find years
        for data in matches.objects.all(): 
            if data.season not in year_list:
                year_list.append(data.season)
        #
        for year in year_list:
            temp_list=[]
            matches_id_list=[]
            #to get the relevant ids for the Year:
            sql_query101='SELECT * FROM home_app_matches WHERE season='+str(year)
            for p in matches.objects.raw(sql_query101):
                matches_id_list.append(p.id)
            temp_dict=dict()
            for ids in matches_id_list:
                sql_query102='SELECT * FROM home_app_deliveries WHERE match_id_id='+str(ids)
            #
                for p in deliveries.objects.raw(sql_query102):
                    #finding batting team and counting extra runs
                    if p.batting_team in temp_dict.keys():
                        temp_dict[p.batting_team]=temp_dict[p.batting_team]+p.extra_runs
                    else:
                        temp_dict[p.batting_team]=p.extra_runs
            temp_list=temp_list+[{"Year":year}]
            for key in temp_dict:   #list of dict
                temp_list.append({key:temp_dict[key]})
            temp_list2.append(temp_list)
        return Response(temp_list2)

def played_vs_win():
    matches_data=matches.objects.all()
    year_list=[]
    #getting list of years
    for data in matches_data:
        if data.season not in year_list:
            year_list.append(data.season)
    #
    result_list=[]
    for year in year_list:
        #generating match ids for the YEAR
        matches_id_list=[]
        matches_data_per_year=matches.objects.filter(season=year)
        for data in matches_data_per_year:
            if data.id not in matches_id_list:
                matches_id_list.append(data.id)
        #
        result_list_ii=[]
        temp_dict=dict()
        #getting mathces played vs win for match_id =id by team___:
        for ids in matches_id_list:
            matches_data_2=matches.objects.filter(id=ids)   #list of data with id=ids
            
            for data in matches_data_2:
                #played
                if data.team1 not in temp_dict.keys():
                    temp_dict[data.team1]=[1,0] #check please
                else:
                    match_vs_win=list(temp_dict[data.team1])
                    match_vs_win[0]=match_vs_win[0]+1
                    temp_dict[data.team1]=match_vs_win
                if data.team2 not in temp_dict.keys():
                    temp_dict[data.team2]=[1,0] #check please
                else:
                    match_vs_win=list(temp_dict[data.team2])
                    match_vs_win[0]=match_vs_win[0]+1
                    temp_dict[data.team2]=match_vs_win
                #winner
                if data.winner:
                    match_vs_win=list(temp_dict[data.winner])
                    match_vs_win[1]=match_vs_win[1]+1
                    temp_dict[data.winner]=match_vs_win
        result_list_ii=result_list_ii+[{"Year":year}]
        for key in temp_dict:   #list of dict
            result_list_ii.append({key:temp_dict[key]})          
        #data for one year#
        result_list.append(result_list_ii)  #data for every year
    print(result_list)
    return 
