/experiments/

```
{
experiments: [
	{
	id: id,
	name: "name"
	}, ...
]
}
```

/experiment/:id

```
{
	subjects: [numbers,...],
	name: "name",
	light_source: [char, ...],
	channels: [num, ...]
	...
}

```


experiment/:id/subject/:sub_id/getData

POST:

```
data_type="something"
channels=[num, ...]
light_source=[char, ...]
time_range=begin,end
```


Response:

```
{
	time_stamp: [floats, ...],
	data: [
			{
				channel_id:"",		
				light_source:
				[
					{
						id: "id", 
						points: []
					}
				]
			}  
		  ]
}
```
experiment/:id/subject/:sub_id/getStimulus

```
{
	stim_points:
	[
		{
			id: "id",
			timestamp: unix_epoch
		}, ...
	]
}
```

