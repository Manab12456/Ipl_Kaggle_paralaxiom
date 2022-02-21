from django.db import models

# Create your models here.
class matches(models.Model):
    season = models.SmallIntegerField()
    city = models.CharField(max_length=15)
    date = models.DateField()
    team1 = models.CharField(max_length=35)
    team2 = models.CharField(max_length=35)
    toss_winner = models.CharField(max_length=35)
    toss_decision = models.CharField(max_length=5)
    result = models.CharField(max_length=10)
    dl_applied = models.BooleanField(default=0)
    winner = models.CharField(max_length=35)
    win_by_runs = models.SmallIntegerField()
    win_by_wickets = models.SmallIntegerField()
    player_of_match = models.CharField(max_length=50)
    venue = models.CharField(max_length= 100)
    umpire1 = models.CharField(max_length=35)
    umpire2 = models.CharField(max_length=35)
    umpire3 = models.CharField(max_length=35)
    #def __str__(self):
    #    return self.id
    class Meta:
        ordering = ('season',)



class deliveries(models.Model):
    match_id = models.ForeignKey(matches,on_delete=models.CASCADE)
    inning = models.SmallIntegerField()
    batting_team = models.CharField(max_length=35)
    bowling_team = models.CharField(max_length=35)
    over = models.SmallIntegerField()
    ball = models.SmallIntegerField()
    batsman = models.CharField(max_length=35)
    non_striker = models.CharField(max_length=35)
    bowler = models.CharField(max_length=35)
    is_super_over = models.BooleanField(default=0)
    wide_runs = models.SmallIntegerField(default=0)
    bye_runs = models.SmallIntegerField(default=0)
    legbye_runs = models.SmallIntegerField(default=0)
    noball_runs = models.SmallIntegerField(default=0)
    penalty_runs = models.SmallIntegerField(default=0)
    batsman_runs = models.SmallIntegerField(default=0)
    extra_runs = models.SmallIntegerField(default=0)
    total_runs = models.SmallIntegerField(default=0)
    player_dismissed = models.CharField(max_length=35)
    dismissal_kind = models.CharField(max_length=35)
    fielder = models.CharField(max_length=35)
    #def __str__(self):
    #    return self.batting_team