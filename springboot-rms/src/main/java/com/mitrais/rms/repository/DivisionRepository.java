package com.mitrais.rms.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mitrais.rms.entity.Division;

@RestResource(exported=false)
public interface DivisionRepository extends PagingAndSortingRepository<Division, Long> {

}
