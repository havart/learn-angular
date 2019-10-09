import { TestBed } from '@angular/core/testing';

import { VideoRenderingService } from './video-rendering.service';

describe('VideoRendering.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoRenderingService = TestBed.get(VideoRenderingService);
    expect(service).toBeTruthy();
  });
});
