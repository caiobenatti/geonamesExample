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
				console.log(textStatus, errorThrown);
			}
		}); 

});

$('#btnTZ').click(function() {
	console.log('test');
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
					$('#txtSunrise').html(result['data']['sunrise']);
					$('#txtSunset').html(result['data']['sunset']);
					$('#txtTime').html(result['data']['time']);
					$('#txtTimezone').html(result['data']['timezoneId']);
					$('#txtCountryName').html(result['data']['countryName']);
				}
			

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(textStatus, errorThrown);
			}
		}); 

});

$('#btnCC').click(function() {
	console.log('test');
		$.ajax({
			url: "libs/php/getCountrycode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLat1').val(),
				long: $('#selLong1').val()
			},
			success: function(result) {

				console.log(result);
							
				if (result.status.name == "ok") {
					$('#txtLanguagesCC').html(result['data']['languages']);
					$('#txtCountryCode').html(result['data']['countryCode']);
					$('#txtCountryname').html(result['data']['countryName']);
				}
			

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(textStatus, errorThrown);
			}
		}); 

});
