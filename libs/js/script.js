$('#btnRun').click(function() {
	
		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);
							
				if (result.status.name == "ok") {
					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
				
				}
			

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 

	});

$('#btnTZ').click(function() {
	
		$.ajax({
			url: "libs/php/getTimezone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				long: $('#selLong').val()
			},
			success: function(result) {

				console.log(result);
							
				if (result.status.name == "ok") {
					$('#txtSunrise').html(result['data'][0]['sunrise']);
					$('#txtSunset').html(result['data'][0]['sunset']);
					$('#txtTime').html(result['data'][0]['time']);
					$('#txtTimezone').html(result['data'][0]['timezoneId']);
				}
			

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 

	});

