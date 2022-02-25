from django.conf.urls import url
from . import views
urlpatterns = [
    url('task_1/', views.matches_played_per_year_List.as_view()),
    url('task_2/', views.total_wins_per_team.as_view()),
    url('task_3/', views.extra_runs_conceded_per_team_for_YEAR.as_view()),
    url('task_4/', views.top_economical_bowler.as_view()),
    url('task_5/', views.played_vs_win.as_view()),
    url('task_12/', views.task_i.as_view()),
]
