package mk.ukim.finki.emt.lab1.DataHolder;

import jakarta.annotation.PostConstruct;
import mk.ukim.finki.emt.lab1.model.Accommodation;
import mk.ukim.finki.emt.lab1.model.Country;
import mk.ukim.finki.emt.lab1.model.Host;
import mk.ukim.finki.emt.lab1.repository.AccommodationRepository;
import mk.ukim.finki.emt.lab1.repository.CountryRepository;
import mk.ukim.finki.emt.lab1.repository.HostRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static mk.ukim.finki.emt.lab1.model.enumerations.Category.*;

@Component
public class DataHolder {
    public static List<Accommodation> accommodations = null;
    public static List<Country> countries = null;
    public static List<Host> hosts = null;

    private final AccommodationRepository accommodationRepository;
    private final CountryRepository countryRepository;
    private final HostRepository hostRepository;

    public DataHolder(AccommodationRepository accommodationRepository, CountryRepository countryRepository, HostRepository hostRepository) {
        this.accommodationRepository = accommodationRepository;
        this.countryRepository = countryRepository;
        this.hostRepository = hostRepository;
    }

    @PostConstruct
    public void init() {
        System.out.println("Initializing DataHolder...");
        accommodations = new ArrayList<>();
        countries = new ArrayList<>();
        hosts = new ArrayList<>();


        System.out.println(countryRepository.findAll().isEmpty());
        if (countryRepository.findAll().isEmpty()){
            countries.add(new Country("Makedonija", "Evropa"));
            countries.add(new Country("Francija", "Evropa"));
            countries.add(new Country("Kanada", "Amerika"));
            countryRepository.saveAll(countries);
        }
        System.out.println(countryRepository.findAll());

        if ( hostRepository.findAll().isEmpty()){
            hosts.add(new Host("Martina", "Georgieva", countries.get(0)));
            hosts.add(new Host("User2", "User", countries.get(2)));
            hostRepository.saveAll(hosts);
        }

        if(accommodationRepository.findAll().isEmpty()){
            accommodations.add(new Accommodation("Hotel 1", HOTEL, hosts.get(0), 100));
            accommodations.add(new Accommodation("Hotel 2", HOTEL, hosts.get(1), 500));
            accommodations.add(new Accommodation("Rooms 1", ROOM, hosts.get(1), 6));
            accommodations.add(new Accommodation("Flat 1", FLAT, hosts.get(0), 50));
            accommodationRepository.saveAll(accommodations);
        }
    }
}
