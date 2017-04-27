package com.mitrais.rms.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mitrais.rms.entity.Grade;

@RestResource(exported=false)
public interface GradeRepository extends PagingAndSortingRepository<Grade, Long>{

}
