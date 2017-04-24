package com.mitrais.rms.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mitrais.rms.entity.Location;
@RestResource(exported = false)
public interface LocationRepositroy extends PagingAndSortingRepository<Location, Long> {

}
