from rest_framework.views import APIView
from rest_framework.response import Response
from .models import matches, deliveries
# Create your views here.


class matches_played_per_year_List(APIView):
    def get(self, request, *args, **kwargs):
        matches_data = matches.objects.all()
        temp_dict = dict()
        for data in matches_data:
            if data.season in temp_dict.keys():
                temp_dict[data.season] = temp_dict[data.season]+1
            else:
                temp_dict[data.season] = 1
        temp_list = []
        for key in temp_dict:  # list of dict
            temp_list = temp_list+[{key: temp_dict[key]}]
        # convert python list of dict to json array of object
        return Response(temp_list)


class total_wins_per_team(APIView):
    def get(self, request, *args, **kwargs):
        matches_data = matches.objects.all()
        temp_dict = dict()
        for data in matches_data:
            if data.winner:
                if data.winner not in temp_dict.keys():
                    temp_dict[data.winner] = 1
                else:
                    temp_dict[data.winner] = temp_dict[data.winner]+1
        result_list = []
        for key in temp_dict:  # list of dict
            result_list.append({key: temp_dict[key]})
        return Response(result_list)


class extra_runs_conceded_per_team_for_YEAR(APIView):
    def get(self, request, *args, **kwargs):
        matches_data = matches.objects.all()
        year_list = []
        # getting list of years
        for data in matches_data:
            if data.season not in year_list:
                year_list.append(data.season)
        #
        result_list = []
        for year in year_list:
            # generating match ids for the YEAR
            matches_id_list = []
            matches_data_per_year = matches.objects.filter(season=year)
            for data in matches_data_per_year:
                if data.id not in matches_id_list:
                    matches_id_list.append(data.id)
            #
            result_list_ii = []
            temp_dict = dict()
            # getting extra runs for match_id =id
            for ids in matches_id_list:
                deliveries_data_per_id = deliveries.objects.filter(
                    match_id_id=ids)  # list of data with id=ids
                for data in deliveries_data_per_id:
                    if data.extra_runs != 0:  # This statement is only to reduce processor load
                        if data.batting_team in temp_dict.keys():
                            temp_dict[data.batting_team] = temp_dict[data.batting_team] + \
                                data.extra_runs
                        else:
                            temp_dict[data.batting_team] = data.extra_runs
            result_list_ii = result_list_ii+[{"Year": year}]
            for key in temp_dict:  # list of dict
                result_list_ii.append({key: temp_dict[key]})
            #data for one year#
            result_list.append(result_list_ii)  # data for every year

        return Response(result_list)


class played_vs_win(APIView):
    def get(self, request, *args, **kwargs):
        matches_data = matches.objects.all()
        year_list = []
        # getting list of years
        for data in matches_data:
            if data.season not in year_list:
                year_list.append(data.season)
        #
        result_list = []
        for year in year_list:
            # generating match ids for the YEAR
            matches_id_list = []
            matches_data_per_year = matches.objects.filter(season=year)
            for data in matches_data_per_year:
                if data.id not in matches_id_list:
                    matches_id_list.append(data.id)
            #
            result_list_ii = []
            temp_dict = dict()
            # getting mathces played vs win for match_id =id by team___:
            for ids in matches_id_list:
                matches_data_2 = matches.objects.filter(
                    id=ids)  # list of data with id=ids

                for data in matches_data_2:
                    # played
                    if data.team1 not in temp_dict.keys():
                        temp_dict[data.team1] = [1, 0]  # check please
                    else:
                        match_vs_win = list(temp_dict[data.team1])
                        match_vs_win[0] = match_vs_win[0]+1
                        temp_dict[data.team1] = match_vs_win
                    if data.team2 not in temp_dict.keys():
                        temp_dict[data.team2] = [1, 0]  # check please
                    else:
                        match_vs_win = list(temp_dict[data.team2])
                        match_vs_win[0] = match_vs_win[0]+1
                        temp_dict[data.team2] = match_vs_win
                    # winner
                    if data.winner:
                        match_vs_win = list(temp_dict[data.winner])
                        match_vs_win[1] = match_vs_win[1]+1
                        temp_dict[data.winner] = match_vs_win
            result_list_ii = result_list_ii+[{"Year": year}]
            for key in temp_dict:  # list of dict
                result_list_ii.append({key: temp_dict[key]})
            #data for one year#
            result_list.append(result_list_ii)  # data for every year
        return Response(result_list)


class top_economical_bowler(APIView):
    def get(self, request, *args, **kwargs):
        pass


class task_i(APIView):
    def get(self, request, *args, **kwargs):
        matches_data = matches.objects.all()
        temp_dict = dict()
        for data in matches_data:
            if data.season in temp_dict.keys():
                temp_dict[data.season] = temp_dict[data.season]+1
            else:
                temp_dict[data.season] = 1
        temp_list = []
        for key in temp_dict:  # list of dict
            temp_list.append([(key, temp_dict[key])])
        # convert python list of dict to json array of object
        # data I

        # data II-->
        temp_dict = dict()
        for data in matches_data:
            if data.winner:
                if data.winner not in temp_dict.keys():
                    temp_dict[data.winner] = 1
                else:
                    temp_dict[data.winner] = temp_dict[data.winner]+1
        result_list = []
        for key in temp_dict:  # list of dict
            result_list.append([(key, temp_dict[key])])

        result_list_ii = []
        result_list_ii.append(temp_list)
        result_list_ii.append(result_list)
        return Response(result_list_ii)
