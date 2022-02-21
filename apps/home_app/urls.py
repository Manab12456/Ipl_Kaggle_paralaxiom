from django.conf.urls import url
from . import views
urlpatterns =[
    #url('home_m/',views.matches_played_per_year_List.as_view()),
    #url('home_tw/',views.total_wins_per_team.as_view()),
    url('home_e/',views.extra_runs_conceded_per_team_for_YEAR.as_view()),
    url('home_pvw/',views.played_vs_win.as_view()),
    url('',views.task_i.as_view()),
]