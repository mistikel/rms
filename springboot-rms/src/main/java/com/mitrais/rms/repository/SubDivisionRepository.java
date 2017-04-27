package com.mitrais.rms.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mitrais.rms.entity.SubDivision;

@RestResource(exported=false)
public interface SubDivisionRepository extends PagingAndSortingRepository<SubDivision, Long> {

}
