package com.pack;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class ConvertDate {

	public String cenvertirDate(Date datee) {
//		String pattern = "EEEEE MMMMM yyyy HH:mm:ss.SSSZ";
		String pattern = "EEEEE; dd-MM-yyyy; HH:mm:ss";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern, new Locale("fr", "FR"));
		// String date = simpleDateFormat.format(new Date());
		String formatteddate = simpleDateFormat.format(datee);
		System.out.println(formatteddate);
		return formatteddate;
	}

	public static void main(String[] args) {
		ConvertDate c = new ConvertDate();
		System.out.println("date convertis " + c.cenvertirDate(new Date()));
	}

}
