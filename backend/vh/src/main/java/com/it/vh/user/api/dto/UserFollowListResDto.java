package com.it.vh.user.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class UserFollowListResDto {
    private long userId;
    private String userName;
    private String statusMsg;
    private String imageUrl;
}
