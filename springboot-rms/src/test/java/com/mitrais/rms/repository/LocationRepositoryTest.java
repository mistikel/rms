package com.mitrais.rms.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.*;
import com.mitrais.rms.entity.Location;
@RunWith(SpringRunner.class)
@DataJpaTest
public class LocationRepositoryTest {
	@Autowired
	private TestEntityManager test;
	
	@Autowired
	private LocationRepositroy repLoc;
	
	@Test
	public void locationTest() throws Exception{
		Location location = new Location();
		location.setCity("Jakarta");
		this.test.persist(location);
		Location loc = this.repLoc.findOne((long) 1);
		assertThat(loc.getCity()).isEqualTo("Jakarta");
		assertThat(loc.getId()).isEqualByComparingTo((long) 1);
	}
	
}
